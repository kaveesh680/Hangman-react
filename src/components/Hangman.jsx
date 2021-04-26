import React, { useState } from 'react'
import img0 from '../Images/0.jpg';
import img1 from '../Images/1.jpg';
import img2 from '../Images/2.jpg';
import img3 from '../Images/3.jpg';
import img4 from '../Images/4.jpg';
import img5 from '../Images/5.jpg';

export const Hangman = () => {

    const defaultValues = { maxWrong: 0, images: [img0, img1, img2, img3, img4, img5] }

    const [mainState, setMainState] = useState({ nWrong: 0, guessed: new Set(), answer: "apple" });
    const guessedWord = () => mainState.answer
        .split("")
        .map(ltr => mainState.guessed.has(ltr) ? ltr : "_");

    const handleGuess = e => {
        let ltr = e.target.value;
        setMainState(st => ({
            ...st,
            guessed: st.guessed.add(ltr),
            nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)


        }));
    };

    const generateButtons = () => "abcdefghijklmnopqrstuvwxyz"
        .split("")
        .map((ltr, index) =>
            <button
                key={index}
                id={index}
                value={ltr}
                onClick={(e) => handleGuess(e)}
                disabled={mainState.guessed.has(ltr)}
            >{ltr}</button>
        );



    return (
        <div>
            <h1>Hangman</h1>
            <img src={defaultValues.images[mainState.nWrong]} alt={`${mainState.nWrong}`} />
            <p>{guessedWord()}</p>
            <p>{generateButtons()}</p>
        </div>
    )
}
