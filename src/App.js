import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      // added psudo id #s
      { id: 'sfdlkj1', name: 'Joey', age: 52 },
      { id: 'fjdksa2', name: 'Calista', age: 5 },
      { id: 'eixcsi3', name: 'Grayson', age: 2 }
    ],
    otherState: 'some other values',
    showPersons: true  //New boolean object to be toggled
  }

  // Delete Person component function
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); // copy array of object using slice method
    const persons = [...this.state.persons];      // copy array of object using spread operator
    persons.splice(personIndex, 1);               // this removes 1 element from array
    this.setState({ persons: persons });          // set the state persons array: with new persons array from splice

  }

  nameChangedHandler = (event, id) => {
    // personIndex = the index value of object with matching ID #s
    // using findIndex() to find the right preson object with matching ID
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // variable to find right obj index# and copy object
    const person = { ...this.state.persons[personIndex] };
    // sets name property of copied person obj to input value
    person.name = event.target.value;
    // create copy of original state
    const persons = [...this.state.persons];
    // find right obj using index# and update that obj
    persons[personIndex] = person;

    // update state with new persons object
    this.setState({ persons: persons })
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
          {
            // User map function to grab persons array of objects and output to Person component. 
            // This makes it so your array of object can be any length instead of hard coded.
            this.state.persons.map((person, index) => {
              return <Person
                name={person.name}
                age={person.age}
                key={person.id}
                //onClick run deletePersonHandler passing the index of array it's clicked on
                click={() => this.deletePersonHandler(index)}
                //onChange run nameChangedHandler when event happens passing person.id#
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            })
          }
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

  }
}




export default App;
