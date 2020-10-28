import React, {Component} from 'react';
import "./contact.scss";
import {Contact} from "./contact";
import { connect } from 'react-redux';
import {getContact} from "../../actions/action";

const mapState = (state) => {
    return state;
  }
  const mapDispatch = {
    getContact,
    
}
 class ContactsFunc extends Component{

    state={
      key: "",
    }



    render(){
      
        return(
        <div className="contact-container">
         <div className="contact-top">
           <span className="chats-title">Chats</span>
         </div>
         <div className="contact-bottom">
            {this.props.contacts.map((el, i) =>{
              if( el.name.toLowerCase().includes(this.props.findPerson.toLowerCase())){
                return(
                  <Contact photo={el.photo} name={el.name} date={el.messages.slice(-1)[0].date.toDateString()} message={el.messages.slice(-1)[0].msg}  choose={(() => this.props.getContact(i))} />
              );
              }
              })}
         </div>
      </div>
            
            
        )
    }
}
export const Contacts = connect(mapState, mapDispatch)(ContactsFunc);