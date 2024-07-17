from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from sklearn.preprocessing import LabelBinarizer
import numpy as np
import pickle
import re
import speech_recognition as sr
from nltk.tokenize import sent_tokenize
from flask_cors import CORS  # Import CORS from flask_cors

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize the stemmer
stemmer = PorterStemmer()

# Load the saved model and other necessary files
model_path = './model/Cyber_Bullying_model_bi_lstm_final.h5'  # Update the path
tokenizer_path = './model/tokenizer.pickle'  # Update the path
encoder_path = './model/label_encoder.pickle'  # Update the path

model = load_model(model_path)
with open(tokenizer_path, 'rb') as handle:
    tokenizer = pickle.load(handle)
with open(encoder_path, 'rb') as handle:
    encoder = pickle.load(handle)


def clean_and_preprocess_text(text):
    # Normalization: Removing URLs
    text = re.sub(r"http\S+|www\S+|https\S+", '', text, flags=re.MULTILINE)
    # Removing user @ references and '#' from tweet
    text = re.sub(r'\@\w+|\#', '', text)
    text = re.sub(r'[^a-zA-Z\s]', '', text)
    # Lowercasing
    text = text.lower()
    # Sentence Segmentation
    sentences = sent_tokenize(text)
    processed_text = []
    for sentence in sentences:
        # Tokenization
        tokens = word_tokenize(sentence)
        # Stop Word Removal
        tokens = [token for token in tokens if token not in stopwords.words('english')]
        tokens = [stemmer.stem(token) for token in tokens]
        processed_text.extend(tokens)
    return " ".join(processed_text)


# Prediction function for new text data
def predict_new_text(new_text):
    # Preprocess the new text
    cleaned_text = clean_and_preprocess_text(new_text)

    # Tokenize and pad the new text
    new_sequence = tokenizer.texts_to_sequences([cleaned_text])
    new_padded = pad_sequences(new_sequence, maxlen=200)  # Assuming maxlen is 200

    # Predict the class
    prediction = model.predict(new_padded)
    predicted_label = encoder.inverse_transform(prediction)

    return predicted_label[0]


# Prediction function for new audio data
def predict_new_audio(audio_file_path):
    # Initialize the recognizer
    recognizer = sr.Recognizer()

    with sr.AudioFile(audio_file_path) as source:
        audio = recognizer.record(source)
        try:
            # Recognize speech using Google Web Speech API
            text = recognizer.recognize_google(audio)
            print(f"Recognized Text: {text}")

            # Predict the class for the recognized text
            predicted_label = predict_new_text(text)
            return predicted_label, text  # Return both the label and the recognized text
        except sr.UnknownValueError:
            print("Google Web Speech API could not understand the audio.")
        except sr.RequestError as e:
            print(f"Could not request results from Google Web Speech API; {e}")

    return None, None  # Return None for both if there's an error


@app.route('/api/predict/text', methods=['POST'])
def predict_text():
    try:
        # Get the input text from the request
        data = request.get_json()
        text = data['text']

        # Predict the label for the text
        predicted_label = predict_new_text(text)

        # Return the predicted label as JSON response
        return jsonify({'predicted_label': predicted_label})

    except Exception as e:
        # Handle any exceptions and return an error response
        return jsonify({'error': str(e)}), 500


@app.route('/api/predict/audio', methods=['POST'])
def predict_audio():
    try:
        # Get the audio file from the request
        audio_file = request.files['audio']
        audio_file.save('temp_audio.wav')

        # Predict the label and get the recognized text for the audio
        predicted_label_audio, recognized_text = predict_new_audio('temp_audio.wav')

        # Return the predicted label and recognized text as JSON response
        return jsonify({'predicted_label_audio': predicted_label_audio, 'recognized_text': recognized_text})

    except Exception as e:
        # Handle any exceptions and return an error response
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
