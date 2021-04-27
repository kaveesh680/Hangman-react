import React from 'react'
import '../styles/AlphaButtons.css';

export const AlphaButtons = (props) => {

    const generateButtons = () => "abcdefghijklmnopqrstuvwxyz"
        .split("")
        .map((ltr, index) =>
            <button
                key={index}
                id={index}
                value={ltr}
                onClick={(e) => props.handleGuess(e)}
                disabled={props.disable.has(ltr)}
            >{ltr}</button>
        );

    return (
        <div>
            <p className='Hangman-btns'>{generateButtons()}</p>
        </div>
    )
}
