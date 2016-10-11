import React, { Component } from 'react';
import './App.scss';
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Feed />
      </div>
    );
  }
}

export default App;
