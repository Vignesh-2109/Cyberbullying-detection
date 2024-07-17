# Cyberbullying Detection Project

This repository contains the code and resources for a comprehensive cyberbullying detection system using Natural Language Processing (NLP) and deep learning techniques. The project includes a web application for real-time detection of cyberbullying from text and audio inputs.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Dataset](#dataset)
- [Model Architecture](#model-architecture)
- [Preprocessing](#preprocessing)
- [Training](#training)
- [Web Application](#web-application)
- [Results](#results)
- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Overview
The goal of this project is to detect instances of cyberbullying in online text and audio data. By leveraging NLP and deep learning models, the system can identify various forms of cyberbullying such as harassment related to ethnicity, religion, gender, and age.

## Features
- **Real-time Cyberbullying Detection**: Analyze text and audio inputs for potential cyberbullying content.
- **Multi-class Classification**: Identify specific types of cyberbullying with six distinct labels.
- **Web Interface**: User-friendly web application built with Flask and React.
- **Detailed Results**: View detailed predictions and confidence scores.

## Technologies Used
- **Backend**: Flask
- **Frontend**: React
- **Deep Learning Models**: GRU, Bi-GRU, LSTM, Bi-LSTM
- **Embeddings**: GloVe
- **Speech-to-Text**: SpeechRecognition library
- **Data Preprocessing**: NLTK, SpaCy
- **Deployment**: Local testing environment

## Dataset
The dataset used for this project includes labeled instances of cyberbullying across six categories:
- Other Cyberbullying
- Not Cyberbullying
- Ethnicity
- Religion
- Gender
- Age

The dataset is balanced to ensure comprehensive analysis and effective model training.

(Cyberbullying_website/frontend/public/text.png)

## Model Architecture
The project explores various deep learning models:
- **GRU**: Gated Recurrent Unit
- **Bi-GRU**: Bidirectional GRU
- **LSTM**: Long Short-Term Memory
- **Bi-LSTM**: Bidirectional LSTM

## Preprocessing
Data preprocessing includes:
- Text normalization (lowercasing, removing special characters)
- Tokenization
- Stop words removal
- Stemming/Lemmatization
- Feature extraction using pre-trained GloVe embeddings

## Training
The models were trained using the processed text data and evaluated using metrics such as accuracy, precision, recall, and F1-score. The Bi-LSTM model achieved the highest performance with an accuracy of 81.25%.

## Web Application
The web application consists of the following pages:
- **Home Page**: Overview of the project
- **About Page**: Detailed information about the project and its implementation
- **Predict Page**: Input text or upload audio for cyberbullying detection

## Results
The Bi-LSTM model showed the best performance:
- **Accuracy**: 81.25%
- **Precision**: 88.02%
- **Recall**: 71.83%

## Usage
To use the cyberbullying detection system:
1. Clone this repository
2. Install the required dependencies
3. Run the Flask backend server
4. Start the React frontend application
5. Access the web application via your browser

## Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/cyberbullying-detection.git
    cd cyberbullying-detection
    ```

2. **Backend Setup**:
    - Create a virtual environment:
      ```bash
      python3 -m venv venv
      source venv/bin/activate
      ```
    - Install dependencies:
      ```bash
      pip install -r backend/requirements.txt
      ```
    - Run the Flask server:
      ```bash
      cd backend
      flask run
      ```

3. **Frontend Setup**:
    - Install Node.js and npm if not already installed
    - Navigate to the frontend directory and install dependencies:
      ```bash
      cd ../frontend
      npm install
      ```
    - Start the React development server:
      ```bash
      npm start
      ```


