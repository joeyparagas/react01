import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = (props) => {
  //  const stateArr = useState({ - this is to set useState as an array
  // We will use destructured array instead where we can initialize the key value for both array elements
  const [personState, setPersonsState] = useState({
    persons: [
      { name: 'Joey', age: 52 },
      { name: 'Calista', age: 5 },
      { name: 'Grayson', age: 2 }
    ]
  });

  const [otherPersonState, setOtherPeronState] = useState('This is a non-object');

  console.log(personState, otherPersonState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Arnold', age: 52 },
        { name: 'Calista', age: 5 },
        { name: 'Grayson', age: 22 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>I'm a React App</h1>
      <p>This is working!</p>
      <button onClick={switchNameHandler}>Don't Click</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}>My Job: Teacher</Person>
      <Person name={personState.persons[1].name} age={personState.persons[1].age} />
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
  );
}

export default app;


