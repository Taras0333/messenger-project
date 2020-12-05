import React from 'react';
import "./input.scss";

export const Input = (props) => {
    return(
        <div className="input-container">
            <div className="input-wrapper">
                <input className="message-input" type="message" value={props.value} placeholder="Type your message" 
                onChange={props.getMessage} onKeyDown={props.keyDown}/>
                <button className="sent-btn" onClick={props.saveMessage}></button>
            </div>
        </div>
    )
}