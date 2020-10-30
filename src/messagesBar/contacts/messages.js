import React, {Component} from 'react';
import "./message.scss";
import {Header} from "./header";
import {Message} from "./message";
import {Input} from "./input";
import {connect} from "react-redux";
import {save} from "../../actions/action";
import {saveResponse} from "../../actions/action";
import axios from 'axios';

const mapState = (state) => {
    return state;
  }
  const mapDispatch = {
    save,
    saveResponse,
    
}

class MessagesFunc extends Component{
    state={
        newMessage: '',
    }
        
    
    getMessage = (e) => {
        this.setState({
            newMessage: e.target.value
        })
        
    }

    saveMessage = () =>{
        this.props.save(this.state.newMessage, this.props.whichContact, new Date());
        this.setState({
            newMessage: '',
            whichContact: this.props.whichContact,
        });
        this.getResponse();
        
    }
    getResponse = () =>{
        let response = "";
        axios.get(`https://api.chucknorris.io/jokes/random`)
        .then((res) => {
            response = res.data.value;
        }).catch((err) => {
            console.log(err);
        })
        setTimeout(() => {
            this.props.saveResponse(response, this.state.whichContact, new Date());
          }, 10000);
       
    }
   
    

    render(){
        return(
            <div className="messages-container">
             
            <Header name={this.props.contacts.find((el) => {
                    if(el.id === this.props.whichContact){
                        return el.name;
                    }
                }).name} photo={this.props.contacts.find((el) => {
                    if(el.id === this.props.whichContact){
                        return el.name;
                    }
                }).photo}/>
            <div className="messages-window">
                {this.props.contacts.find((el) => {
                    if(el.id === this.props.whichContact){
                        return el;
                    }
                }).messages.map((el) =>{
                    if(el.from === "Me"){
                        return(
                            <Message message={el.msg} stylesMessage={{backgroundColor: "rgb(214, 214, 214)", marginLeft: "auto", color: "#444040"}} isPhoto={false} date={new Date(el.date).toDateString()}/>
                        )
                    }
                    return(
                        <Message message={el.msg}  photo={this.props.contacts.find((el) => {
                            if(el.id === this.props.whichContact){
                                return el.name;
                            }
                        }).photo} isPhoto={true} date={new Date(el.date).toDateString()}/>
                    )
                })}
                
            </div>
            <Input getMessage={this.getMessage} saveMessage={this.saveMessage} value={this.state.newMessage}/>
            
           </div>
           
        )
    }
}
export const Messages = connect(mapState, mapDispatch)(MessagesFunc); 