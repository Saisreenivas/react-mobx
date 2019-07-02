import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import { observer } from 'mobx-react';
import ApplicationBar from './applicationbar/ApplicationBar';
import TodoBody from './todobody/TodoBody';

@observer(['styleStore','todoListStore'])
// , 'todolistStore']
class App extends Component {

  
  
  render() {
    
    // const {todoList} = this.props.TodolistStore;
    // const {styleStore} = this.props.StyleStore;

    return (
      <div >
        <h5>by react-mobx</h5>
      {/* // className="App" */}
      
      <ApplicationBar />
      <button onClick={ ()=> this.props.styleStore.switchToLightTheme()}>Switch To Light Theme</button>
      <button onClick={ ()=> this.props.styleStore.switchToDarkTheme()}>Switch To Dark Theme</button>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
             Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-linkht
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        <hr></hr>
        <TodoBody />
      </div>
    );
  }
}

export default App;
