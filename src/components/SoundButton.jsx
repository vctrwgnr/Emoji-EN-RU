import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const SoundButton = ({ text }) => {
    const speakText = () => {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        } else {
            alert('Sorry, your browser does not support text-to-speech.');
        }
    };

    return (
        <button onMouseEnter={speakText} className="sound-button">
            <FontAwesomeIcon icon={faVolumeUp}/>
        </button>
    );
};

export default SoundButton;