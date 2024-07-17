import React from 'react';
import TextInput from './TextInput';
import './TextPage.css'; // Import CSS file for page-level styling

const TextPage = () => {
    return (
        <div className="text-page-container">
            <h2>Text Input</h2>
            <TextInput />
        </div>
    );
};

export default TextPage;
