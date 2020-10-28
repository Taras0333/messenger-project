import React from 'react';
import "./contact.scss";
import Check from "../../images/check.svg";

export const Contact = (props)=> {
    return(
        <div className="contact" onClick={props.choose}>
            <div className="img-wrapper">
                <img className="avatar" src={props.photo} alt="user icon"/>
                <img className="check" src={Check} alt="check icon"/>
              </div>
            <div className="content-wrapper">
                <span className="name">{props.name}</span>
                <span className="message">{props.message}</span>
            </div>
            <div className="date-wrapper">
    <span className="date">{props.date}</span>
            </div>
        </div>
    )
}