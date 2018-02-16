import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dummy from './components/Dummy';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'I am a test'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Testing git creds pt4</p>
        <Dummy testProp={this.state.test}/>
      </div>
    );
  }
}

export default App;
