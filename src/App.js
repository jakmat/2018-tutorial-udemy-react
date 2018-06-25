import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stefi', age: 26 },
      { name: 'Oli', age: 20 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {    
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stefi', age: 27 },
        { name: 'Oli', age: 20 }
      ],
      someOtherProperty: 'something'
    });
  }
  
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stefi', age: 26 },
        { name: 'Oli', age: 20 }
      ],
      someOtherProperty: 'something'
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  getPersons = () => {
    return this.state.persons.map((person) => {
      return <Person name={person.name} age={person.age} />
    });
  }

  render() {
    const style = {
      backgroundColor: '#f0f0f0',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* <Person click={this.switchNameHandler.bind(this, 'Max!!!')} name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person changed={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */this.getPersons()}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>Some paragraph</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>    
    );
  }
}

export default App;