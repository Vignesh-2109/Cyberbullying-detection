import React from 'react';
import { Link } from 'react-router-dom';
import './Predict.css'; // Import your CSS file for styling

const Predict = () => {
  return (
    <div className="predict-container" >
      <h1>Predict Cyberbullying</h1>
      <div className="options-container">
        <Link to="/text" className="option">
          <div className="option-content">
            <img src="/text.png" alt="Text Input" className="option-image" />
            <div className="option-caption">Text as Input</div>
          </div>
        </Link>

        <Link to="/audio" className="option">
          <div className="option-content">
            <img src="/audio.png" alt="Audio Input" className="option-image" />
            <div className="option-caption">Audio as Input</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Predict;
