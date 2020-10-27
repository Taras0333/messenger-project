import React, {Component} from 'react';
import { connect } from 'react-redux';
import {HeaderView} from "./header";
import {search} from "../actions/action";


const mapState = (state) => {
    return state;
  }
  const mapDispatch = {
    search,
    
}
 class HeaderFunc extends Component{
    state={}

    searchPerson = (e) =>{
        this.props.search(e.target.value);
    }
    
    

    render(){
        return(
       <HeaderView search = {this.searchPerson}/>
            
            
        )
    }
}
export const Header = connect(mapState, mapDispatch)(HeaderFunc);