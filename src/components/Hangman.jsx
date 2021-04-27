import React, { useState } from 'react';
import img0 from '../Images/0.jpg';
import img1 from '../Images/1.jpg';
import img2 from '../Images/2.jpg';
import img3 from '../Images/3.jpg';
import img4 from '../Images/4.jpg';
import img5 from '../Images/5.jpg';
import img6 from '../Images/6.jpg';
import { randomWord } from './Word.jsx';
import { AlphaButtons } from './AlphaButtons.jsx';
import '../styles/Hangman.css';

export const Hangman = () => {

    const defaultValues = { maxWrong: 6, images: [img0, img1, img2, img3, img4, img5, img6] }
    const [mainState, setMainState] = useState({ nWrong: 0, guessed: new Set(), answer: randomWord(), show: true });

    const winState = () => {
        let win = false;
        let count = 0;
        mainState.answer.split("").map(ltr => mainState.guessed.has(ltr) ? win = true && count++ : win = false);
        count === mainState.answer.length ? win = true : win = false;
        return win
    }

    const guessedWord = () => mainState.answer
        .split("")
        .map(ltr => mainState.guessed.has(ltr) ? ltr : "_");

    const handleGuess = e => {
        let ltr = e.target.value;
        setMainState(st => ({
            ...st,
            guessed: st.guessed.add(ltr),
            nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
            show: st.nWrong >= 5 ? false : true


        }));
    };

    const refreshPage = () => setMainState({
        nWrong: 0, guessed: new Set(), answer: "apple", show: true
    });

    return (
        <div className='Hangman'>
            <h1>Hangman</h1>
            <img src={defaultValues.images[mainState.nWrong]} alt={`${mainState.nWrong}`} />
            <p className='Hangman-word'>{mainState.show ? guessedWord() : mainState.answer}</p>
            {winState() ? <h3>You Win!</h3> : <h3>{mainState.show ? `Number wrong: ${mainState.nWrong}.` : "You lose!"}</h3>}
            <button className="Restart-btn" onClick={() => refreshPage()}>Restart</button>
            {winState() ? null : (mainState.show && <AlphaButtons handleGuess={handleGuess} disable={mainState.guessed} />)}

        </div>
    )
}
