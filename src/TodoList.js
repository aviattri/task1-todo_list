import React, { Component } from 'react';
import './App.css';
 
class App extends Component {
  render(){
    return(
      <div id="cont1">
        <center>
        <input type="text" placeholder="whats in ur mind"
          className="form-control"/>

        <button className="btn btn-danger">add item </button>
        </center>
      </div>
    );
  }
}

export default App;