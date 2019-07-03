import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import { observer } from 'mobx-react';
import ApplicationBar from './Header';
import TodoBody from './components/TodoBody';
import Home from './components/Home';

import {Route} from 'react-router-dom';
import CustomiseNavBar from "./components/CustomiseNavBar";
import NavigationBar from "./NavigationBar";
import './App.css';

@observer(['styleStore','todoListStore'])
// , 'todolistStore']
class App extends Component {

  
  
  render() {
    
    // const {todoList} = this.props.TodolistStore;
    // const {styleStore} = this.props.StyleStore;

    return (
      <div >
      
      <ApplicationBar />
      <NavigationBar />
      <div style={{"height":"100px"}}></div>

      <div className="Container">
        <Route path="/" exact strict render={Home} />
        <Route path="/todo" exact strict render={props => <TodoBody {...props}/>}/>
        <Route path="/customise" exact strict render={props => <CustomiseNavBar {...props}/>}/>
      </div>  

      </div>
    );
  }
}

export default App;
