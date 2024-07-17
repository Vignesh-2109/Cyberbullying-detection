import React, { useState } from 'react';
import axios from 'axios';
import './AudioInput.css'; // Import CSS file for styling

const AudioInput = () => {
    const [audioFile, setAudioFile] = useState(null);
    const [result, setResult] = useState('');
    const [uploading, setUploading] = useState(false); // State for showing uploading animation
    const [recognizedText, setRecognizedText] = useState(''); // State for recognized text
    const [prediction, setPrediction] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('audio', audioFile);

        // Reset previous results
        setResult('');
        setRecognizedText('');
        setPrediction('');
        setUploading(true); // Show uploading animation

        try {
            const response = await axios.post('http://localhost:5000/api/predict/audio', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response from API:', response.data); // Log the response data

            // Assuming your API response structure has fields 'predicted_label_audio' and 'recognized_text'
            if (response.data && response.data.predicted_label_audio) {
                setPrediction(response.data.predicted_label_audio);
                setRecognizedText(response.data.recognized_text);
                setResult(getMessage(response.data.predicted_label_audio));
            } else {
                setResult('Error: Invalid response format');
            }
        } catch (error) {
            console.error('Error predicting audio:', error);
            setResult('Upload Files in .wav format');
        } finally {
            setUploading(false); // Hide uploading animation
        }
    };

    const handleFileChange = (e) => {
        setAudioFile(e.target.files[0]);
    };

    const getMessage = (prediction) => {
        switch (prediction) {
            case 'not_cyberbullying':
                return 'Relax..Its not Cyberbullying';
            case 'other_cyberbullying':
                return 'It may be Cyberbullying but need not be tensed....';
            case 'religion':
            case 'ethnicity':
            case 'age':
            case 'gender':
                return 'Cyberbullying Detected..';
            default:
                return '';
        }
    };

    const getColor = (prediction) => {
        switch (prediction) {
            case 'not_cyberbullying':
                return 'green';
            case 'other_cyberbullying':
                return 'yellow';
            case 'religion':
            case 'ethnicity':
            case 'age':
            case 'gender':
                return 'red';
            default:
                return 'black';
        }
    };

    return (
        <div className="audio-input-container">
            <h2>Audio Input Prediction</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <label className="file-upload">
                    <input type="file" accept="audio/*" onChange={handleFileChange} />
                    Choose Audio File
                </label>
                <button type="submit" className="predict-button">
                    Predict
                </button>
            </form>
            {uploading && <p className="uploading-message">Uploading...</p>}
            {recognizedText && (
                <p className="recognized-text-message">
                    Recognized Text: {recognizedText}
                </p>
            )}
            {prediction && (
                <div className={`result-message ${getColor(prediction)}`}>
                    Prediction: {prediction}
                </div>
            )}
            {result && (
                <div className={`result-message ${getColor(prediction)}`}>
                    {result}
                </div>
            )}
            {result === 'Error: Invalid response format' && (
                <p className="error-message">{result}</p>
            )}
            {result === 'Error predicting audio' && (
                <p className="error-message">{result}</p>
            )}
            {result === 'File format not supported. Please upload an audio file.' && (
                <p className="error-message">{result}</p>
            )}
        </div>
    );
};

export default AudioInput;
