import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Joey', age: 52 },
      { name: 'Calista', age: 5 },
      { name: 'Grayson', age: 2 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Arnold', age: 52 },
        { name: 'Calista', age: 5 },
        { name: 'Grayson', age: 22 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <p>This is working!</p>
        <button onClick={this.switchNameHandler}>Don't Click</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Job: Teacher</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

      </div>
    );
    // The simplifed code above is what gets compiled to what is seen below
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I\'m Happy!!!'));
  }
}




export default App;
