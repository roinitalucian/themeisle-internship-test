import React from 'react';
import './popUp.css';


const PopUp = ({ entry, closeHandler }) => {
    return(
        <div className='popUp-container'>
            <div className='popUp-bar'>
                <span class="close" onClick={() => closeHandler()} />
            </div>
            <div className='popUp-image'>
                <img src={entry.large} alt='large img' />
            </div>
            <div className='popUp-text'>
                <h2>{entry.title}</h2>
                <p>{entry.content}</p>
            </div>
            <div className='popUp-footer'>
                <div className='author-image'>
                    <img src={entry.avatar === undefined ? 'https://i.imgur.com/FPVHNhg.jpg' : entry.avatar} alt='avatar' />
                </div>
                <div className='author-name'>
                    {entry.author} - {entry.role}
                </div>
            </div>
        </div>
    )
};

export default PopUp;