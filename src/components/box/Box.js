import React from 'react';
import './Box.css';


const Box = (props) => {
    var d = new Date(props.date * 1000);
    return(
        <div className='flex-container box'>
            <div className='overlay'>
                <h2>Learn More</h2>
            </div>
            <div className='flex-item image' onClick={() => {props.selectHandler(props)}}>
            <img src={props.image} alt='img'/>
            </div>

            <div className='flex-item shapes'>
                <span className='circle circleBlue'> </span>
                <span className='circle circleYellow' />
            </div>

            <div className='flex-item text'>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>

            <div className='flex-item flex-container flex-container-row'>
                <div>
                    <p>{props.author} - {props.role}</p>
                </div>

                <div>
                    <p>{d.toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                </div>
            </div>
        </div>
    )
};

export default Box;