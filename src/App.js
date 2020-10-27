import React from 'react';
import './App.scss';
import {Provider} from "react-redux"
import {store} from "./store/store";
import {Contacts} from "./contactBar/contacts/contacts";
import {Messages} from "./messagesBar/contacts/messages";
import {Header} from "./header/headerFunc";

function App() {
  
  return (
    <Provider store={store}>
      <div className="app-container">
        <div className="left-bar-container">
         <Header/>
         <Contacts/>
        </div>
        <div className="right-bar-container">
         <Messages/>
        </div>
      
      </div>
    </Provider>
   
  );
}

export default App;
