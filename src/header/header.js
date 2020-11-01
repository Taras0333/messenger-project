import React from 'react';
import "./header.scss";
import Anonymous from "../images/anonymous.png";
import Check from "../images/check.svg";

export const HeaderView = (props) => {
    return(
      <div className="header-container">
          <div className="header-top header">
              <div className="img-wrapper">
                <img className="avatar" src={Anonymous} alt="user icon"/>
                <img className="check" src={Check} alt="check icon"/>
              </div>
          </div>
          <div className="header-bottom header">
              <input className="search" type="search" placeholder="Search or start new chat" onChange = {props.search}>
              </input>
          </div>
      </div>
    )
}