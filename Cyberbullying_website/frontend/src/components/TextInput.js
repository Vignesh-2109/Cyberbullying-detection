import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making HTTP requests
import './TextInput.css'; // Import CSS file for styling

const TextInput = () => {
    const [inputText, setInputText] = useState('');
    const [prediction, setPrediction] = useState('');
    const [loading, setLoading] = useState(false); // State to manage loading state
    const apiUrl = 'http://localhost:5000/api/predict/text'; // Updated API endpoint URL

    const handleSubmit = async () => {
        setLoading(true); // Set loading state to true
        try {
            const response = await axios.post(apiUrl, { text: inputText });
            console.log('Response from API:', response.data); // Log the entire response data for debugging
            if (response.data && response.data.predicted_label) {
                setPrediction(response.data.predicted_label);
            } else {
                setPrediction('Error: Invalid response format'); // Handle unexpected response format
            }
        } catch (error) {
            console.error('Error predicting:', error);
            setPrediction('Error predicting. Please try again.');
        } finally {
            setLoading(false); // Set loading state back to false regardless of success or error
        }
    };

    // Reset prediction state when inputText changes
    const handleInputChange = (e) => {
        setInputText(e.target.value);
        setPrediction(''); // Reset prediction state
    };

    // Determine message and color based on prediction result
    const getMessageAndColor = () => {
        if (prediction === 'not_cyberbullying') {
            return { message: 'Relax..Its not Cyberbullying', color: 'green' };
        } else if (prediction === 'other_cyberbullying') {
            return { message: 'It may be Cyberbullying but need not be tensed....', color: 'yellow' };
        } else if (prediction == 'religion'){
            return { message: 'Cyberbullying Detected..', color: 'red' };
        }
        else if (prediction == 'ethnicity'){
            return { message: 'Cyberbullying Detected..', color: 'red' };
        }
        else if (prediction == 'age'){
            return { message: 'Cyberbullying Detected..', color: 'red' };
        }
        else if (prediction == 'gender'){
            return { message: 'Cyberbullying Detected..', color: 'red' };
        }
         else {
            return { message: 'Enter the text above', color: 'blue' };
        }
    };

    const { message, color } = getMessageAndColor();

    return (
        <div className="text-input-container">
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                className="input-field"
                placeholder="Enter text here..."
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSubmit();
                    }
                }}
            />
            <button onClick={handleSubmit} className="predict-button">
                Predict
            </button>
            {loading && (
                <p className="loading-text">
                    Loading...
                </p>
            )}
            {!loading && prediction !== '' && (
                <p className="prediction-text">
                    Prediction: <span className="prediction-result">{prediction}</span>
                </p>
            )}
            {!loading && prediction === '' && (
                <p className="prediction-text">
                    Waiting for prediction...
                </p>
            )}
            <div className={`message-bar ${color}`}>{message}</div>
        </div>
    );
};

export default TextInput;
