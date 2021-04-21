import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      // added psudo id #s
      { id: 'sfdlkj1', name: 'Joey', age: 52 },
      { id: 'asdfpo2', name: 'Leslie', age: 12 },
      { id: 'fjdksa3', name: 'Calista', age: 5 },
      { id: 'eixcsi4', name: 'Grayson', age: 2 }
    ],
    otherState: 'some other values',
    showPersons: false  //New boolean object to be toggled (set to true if default on)
  }

  // Delete Person component function
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); // copy array of object using slice method
    const persons = [...this.state.persons];      // copy array of object using spread operator
    persons.splice(personIndex, 1);               // this removes 1 element from array
    this.setState({ persons: persons });          // set the state persons array: with new persons array from splice

  }

  // Change the name on screen to what is typed in input box
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

    // style button using inline style
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // create variable of object of CSS classes from App.css
    // .join merges both elements into 1 string "red bold" setting it as the CSS class
    // const classes = ['red', 'bold'].join(' ');
    // Make CSS class dynamic so if there are 1, 2 or 3+, classes will be added to <p> accordingly
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');  // if 2 or less elements, add red class
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // if 1 or less, add bold class
    }

    // variable to equate to initial hidden/null div
    let persons = null;

    // Conditional statement switch between null or inserting div block of Person component
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
      );
      // if showing results, then also change button style to red fill
      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>I'm a React App</h1>
        {/* Change text depending on number of Persons are in state, red if 2, then bold red 1 
            Note that .join makes array as a single string */}
        <p className={classes.join(' ')}>This is working!</p>
        <button
          style={style}
          // On click, run fuction note lack of () as to not run automatically on load
          onClick={this.togglePersonsHandler}>
          Toggle Persons</button>
        {persons}
      </div>
    );

  }
}




export default App;
