import React from 'react';
import Check from "../../images/check.svg";
import "./message.scss";

export const Header = (props) => {
    return(
         <div className="messages-header">
            <div className="img-wrapper">
                <img className="avatar" src={props.photo} alt="user icon"/>
                <img className="check" src={Check} alt="check icon"/>
            </div>
            <span className="user-name">{props.name}</span>
        </div>
    )
}