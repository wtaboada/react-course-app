import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    input: '',
    inputLength: 0,
  }

  changeInputLengthHandler = (event) => {
    this.setState({
      input: event.target.value,
      inputLength: event.target.value.length
    })
  }

  removeCharHandler = (index) => {
    const newInput = this.state.input.split('')
    newInput.splice(index, 1);
    this.setState({input: newInput.join(''), inputLength: newInput.length});
  }

  render() {
    return (
      <div className="App">
        <h1>List and Conditionals Assignment</h1>
        <input type="text" onChange={this.changeInputLengthHandler} value={this.state.input}/>
        <p>Input length: {this.state.inputLength}</p>
        <ValidationComponent inputLength={this.state.inputLength}/>
        {
          this.state.input.split('').map((char, index) => {
            return <CharComponent 
            key={index} 
            char={char} 
            clicked={() => this.removeCharHandler(index)}/>
          })
        }
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
