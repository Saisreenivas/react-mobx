import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import { observer } from 'mobx-react';
import ApplicationBar from './applicationbar/ApplicationBar';

@observer(['styleStore','todoListStore'])
// , 'todolistStore']
class App extends Component {

  createNew(e) {
    if (e.which === 13) {
      this.props.todoListStore.createTodo(e.target.value)
    // this.todoList.push(new Todo(e.target.value))
      e.target.value = ""
    }
  }
  
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
        <div style={{padding:'15px', backgroundColor:'#eeeeee'}}>
          <div>
            <span style={{width:"15%", display:"inline-block"}} >Enter Todo's here:</span>
            <input type="text" onKeyPress={this.createNew.bind(this)} />
          </div><br></br>

          {this.props.todoListStore.todoList.map((entry,i)=><li key={i} style={this.props.styleStore.applicationBarStyle}>{entry.msg}</li>)}
        </div>
      </div>
    );
  }
}

export default App;
