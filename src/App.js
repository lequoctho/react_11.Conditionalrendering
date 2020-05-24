import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Notification from './components/Notification'

class App extends Component {
  constructor(){
    super();
    this.hasUnread = true;
  }
  
  render() {
    return (
      <div className="App">
        <img class="image" src="https://image.flaticon.com/icons/svg/2097/2097743.svg" />
        <Notification hasUnread={this.hasUnread} />  
      </div>
    );
  }
}

export default App;
