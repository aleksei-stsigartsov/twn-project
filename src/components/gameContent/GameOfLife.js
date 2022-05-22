import './gameOfLife.css';
import loader from "./../../assets/images/loader.svg";
import { useState } from 'react';


function GameOfLife() {
    const [text, setText] = useState(null)

    fetch('https://midaiganes.irw.ee/api/list/972d2b8a')
        .then(res => res.json())
        .then(
            (result) => setText(result),
            (e) => console.warn('fetch failure', e)
        )

    return (
        <>
            {text ? (
                <div className='inl-center'>
                    <h1>Game Of Life</h1>
                    <div className='container_gif' dangerouslySetInnerHTML={ {__html: text.intro} } />
                    <p>Sorry, did not have time to complete this task in time, in the future I will definitely do it</p>
                </div>
        ) : <img src={loader} className="loader" aria-label="TWN loader" />}
        </>
    );

}
export default GameOfLife;