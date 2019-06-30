import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import { observer } from 'mobx-react';

@observer(['TodolistStore'
// , 'StyleStore'
])
class App extends Component {
  
  render() {
    
    const {todoList} = this.props.TodolistStore;
    // const {styleStore} = this.props.StyleStore;

    return (
      <div className="App">
      {/* <ApplicationBar /> */}
      {/* <button onClick={ ()=> styleStore.switchToLightTheme()}>Switch To Light Theme</button> */}
      {/* <button onClick={ ()=> styleStore.switchToDarkTheme()}>Switch To Dark Theme</button> */}
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
        {todoList.map((entry,i)=><li key={i}>{entry.msg}</li>)}
      </div>
    );
  }
}

export default App;
