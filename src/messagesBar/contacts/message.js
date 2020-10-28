import React from 'react';
import "./message.scss";

export const Message = (props) =>{
    if(props.isPhoto){
        return(
        
            <div className="each-message-wrapper">
                <div className="each-message-content">
                <div className="img-wrapper img-wrapper-message">
                    <img className="avatar avatar-message" src={props.photo} alt="user icon"/>
                </div>
                 <div className="each-message" style={props.stylesMessage}>
                    <span>{props.message}</span>
                </div>
                </div>
        <span className="message-date">{props.date}</span>
            </div>
           
        )
    }
    return(
        
        <div className="each-message-wrapper" >
             <div className="each-message-content">
                <div className="each-message" style={props.stylesMessage}>
                  <span>{props.message}</span>
                </div>
            </div>
            <span className="message-date message-date-me">{props.date}</span>
        </div>
        
       
    )
}
