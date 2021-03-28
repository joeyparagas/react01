import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Joey', age: 52 },
      { name: 'Calista', age: 5 },
      { name: 'Grayson', age: 2 }
    ],
    otherState: 'some other values',
    showPersons: false  //New boolean object to be toggled
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 52 },
        { name: 'Calista', age: 5 },
        { name: 'Grayson', age: 22 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Arnold', age: 52 },
        { name: event.target.value, age: 5 },
        { name: 'Grayson', age: 22 }
      ]
    })
  }

  // Function to toggle inverse of showPersons object
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;     //variable to equate to initial hidden/null div

    // Conditional statement switch between null or inserting div block
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            // Clicking on name changes DOM
            click={this.switchNameHandler.bind(this, 'John')} >My Job: Teacher</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            // Only input box that changes the DOM
            changed={this.nameChangeHandler} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      )
    }

    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <p>This is working!</p>
        <button
          style={style}
          // On click, run fuction
          onClick={this.togglePersonsHandler}>
          Toggle Persons</button>
        {/* Rewritten for a more common way of using conditionals */}
        {/* Inserting variable instead of div block */}
        {persons}
      </div>
    );
    // The simplifed code above is what gets compiled to what is seen below
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I\'m Happy!!!'));
  }
}




export default App;
