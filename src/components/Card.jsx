import React, { useState } from 'react';
import SoundButton from './SoundButton';

function Card(props) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div className={`card-container ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
            <div className="card front">
                <h1>{props.emoji}</h1>
            </div>
            <div className="card back">
                <div className="top">
                    <SoundButton text={props.meaning}/>
                    <h1>{props.meaning}</h1>


                </div>
                <div className="bottom">
                    <p>{props.translation}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;