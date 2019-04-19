import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    input: '',
  }

  changeInputLengthHandler = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  removeCharHandler = (index) => {
    const newInput = this.state.input.split('')
    newInput.splice(index, 1);
    this.setState({input: newInput.join('')});
  }

  render() {
    return (
      <div className="App">
        <h1>List and Conditionals Assignment</h1>
        <input type="text" onChange={this.changeInputLengthHandler} value={this.state.input}/>
        <p>Input length: {this.state.input.length}</p>
        <ValidationComponent inputLength={this.state.input.length}/>
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
