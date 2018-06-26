===============================================================
I. Getting Started (11)
---------------------------------------------------------------
1. Introduction - 1:49
------------------------------
React = "EVERYTHING IS JAVASCRIPT"
---------------------------------------------------------------
2. What is React? - 2:56 - components-learning-card.pdf
------------------------------
reusability
---------------------------------------------------------------
3. Real-World SPAs & React Web Apps - 2:28
------------------------------
React, Udemy websites
---------------------------------------------------------------
4. Adding the Right React Version to Codepen - 0:00
------------------------------
jakmat
---------------------------------------------------------------
5. Writing our First React Code - 15:07
------------------------------
HTML:
<div id="p1"></div>
<div id="p2"></div>
<div id="app"></div>
------------------------------
CSS:
.person {
  display: inline-block;
  margin: 10px;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  width: 200px;
  padding: 20px;
}
------------------------------
JS:
function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your age: {props.age}</p>
    </div>
  );
}

var app = (
  <div>
    <Person name="Nick" age="20"/>
    <Person name="Maya" age="25"/>
  </div>
);

ReactDOM.render(<Person name="Johnny" age="29"/>, document.querySelector('#p1'));
ReactDOM.render(<Person name="Jakub" age="31"/>, document.querySelector('#p2'));
ReactDOM.render(app, document.querySelector('#app'));
---------------------------------------------------------------
6. Why Should we Choose React? - 2:03
------------------------------
- better UI State control
- focus on businnes logic rather than preventing app failures
- huge ecosystem, high performance, active community
---------------------------------------------------------------
7. React Alternatives - 1:11
------------------------------
Angular, Vue
---------------------------------------------------------------
8. Understanding Single Page Applications and Multi Page Applications - 3:38
------------------------------
SPA: typically only ONE ReactDOM.render() call
MPA: one ReactDOM.render() call per widget
---------------------------------------------------------------
9. Course Outline - 7:28
------------------------------
- Intro
- ES6 Review
- Basics: Components, Passing Data
- Debugging
- Styling Components
- Components Deep Dive: Lifecycle, Updating State
- HTTP Requests: Fetch API, Update API, AJAX
- Routing
- Forms & Validation: Dynamic Way
- Redux
- Authentication
- Testing Introduction
- Deployment
- Bonus Content: Next.js, Webpack
---------------------------------------------------------------
10. How to get the Most out of This Course - 2:29
------------------------------
- code along
- check source code
- ask&answer Q&A
- practice!
---------------------------------------------------------------
11. Useful Resources & Links - 0:00
------------------------------
DOCS: https://reactjs.org/
DEMO: https://codepen.io/anon/pen/MELQaQ
---------------------------------------------------------------
===============================================================









===============================================================
II. Refreshing Next Generation JavaScript (Optional) (13)
---------------------------------------------------------------
12. Module Introduction - 1:35
------------------------------
---------------------------------------------------------------
13. Understanding "let" and "const" - 3:05
------------------------------
let - variables
const - constants
---------------------------------------------------------------
14. Arrow Functions - 5:27
------------------------------
const multiply = number => number * 2;
console.log(multiply(4));
---------------------------------------------------------------
15. Exports and Imports - 4:43
------------------------------
// person.js
const person = {
  name: 'Max'
}
export default person; // just ONE
// utility.js
export const clean = () => {...}
export const baseData = 10;
//app.js
import person from './person.js'; // from single export, default export
import prs from './person.js'; // the same as above
import { clean } from './utility.js'; // named export
import { baseData } from './utility.js'; // named export
import * as bundled from './utility.js'; // named export, bundled to one object, access from bundled.clean, bundled.baseData
---------------------------------------------------------------
16. Understanding Classes - 4:37
------------------------------
class Human {
  constructor(gender) {
     this.gender = gender;
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor(name, gender) {
    super(gender);
    this.name = name;
  }

  printName() {
    console.log ('hello, ' + this.name);
  }
}

const john = new Person('Johnny', 'male');

john.printName();
john.printGender();
---------------------------------------------------------------
17. Classes, Properties and Methods - 3:03
------------------------------
ES6:
constructor() {
  this.myProperty = 'value'
}

myMethod() {
  // ...
}

ES7:
myProperty = 'value'
myMethod = () => {
  // ...
}
------------
class Human {
  gender = 'female';

  printGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human {
  name = 'Max';
  gender = 'male';


  printName = () => {
    console.log (this.name);
  }
}

const john = new Person('Johnny', 'male');
john.printName();
john.printGender();
---------------------------------------------------------------
18. The Spread & Rest Operator - 6:30
------------------------------
SPREAD OPERATOR - splits up array elements OR object properties:
---------------
const oldArray = [1997, 1998, 1999];
const newArray = [...oldArray, 2000, 2001, 2002];
console.log(newArray); // [1997, 1998, 1999, 2000, 2001, 2002]
---
const oldObject = { name: 'Max', age: 28 };
const newObject = { ...oldObject,  gender: 'male', languages: 'HTML, CSS, JavaScript' };
console.log(newObject); // { age: 28, gender: "male",languages: "HTML, CSS, JavaScript", name: "Max" }
------------------------------
REST OPERATOR - merges a list of function arguments into an array to be processed by a function. Used only in function declaration:
---------------
function sortArgs(...args) {
  return args.sort()
}

let sorted = sortArgs(6, 3, 7, 0, 2, 4, 8, 1, 9, 5);
console.log(sorted);
---------------SPREAD + REST:
const numbers = [6, 3, 7, 0, 2, 4, 8, 1, 9, 5];
const filter = (...args) => {
  return args.filter(el => el % 2 === 0 )
}
console.log(filter(...numbers).sort());
---------------------------------------------------------------
19. Destructuring - 3:13
------------------------------
DESTRUCTURING - extracts array elements or object properties to single variables:
---------------Array elements:
let [a, b, c] = [1, 2, 3];
console.log(a);
console.log(b);
console.log(c);
---------------Object properties:
let {a, b, c} = { a: 1, b: 2, c: 3 };
console.log(a);
console.log(b);
console.log(c);
---------------------------------------------------------------
20. Reference and Primitive Types Refresher - 4:26
------------------------------
// Primitive type
let number = 1;
let num2 = number;
number = 2;
console.log(num2); // copy of number

// Reference type:
let person = {
  name: 'Max'
}
let secondPerson = person;
let thirdPerson = { ...person }
person.name = 'Manu';
console.log(secondPerson); // pointer to person object
console.log(thirdPerson); // new copy of an immutable object
---------------------------------------------------------------
21. Refreshing Array Functions - 2:45
------------------------------
const array = [6, 4, 7, 2];

let map = array.map(item => item * 2);
let filter = array.filter(item => item % 2 === 0);
let reduce = array.reduce((sum, item) => sum + item );
let sort = array.sort();
console.log(map);
console.log(filter);
console.log(reduce);
console.log(sort);
---------------------------------------------------------------
22. Wrap Up - 0:52
------------------------------
---------------------------------------------------------------
23. Next-Gen JavaScript - Summary - 0:00
------------------------------
// next-gen-js-summary.pdf
---------------------------------------------------------------
24. JS Array Functions
------------------------------
map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
---------------------------------------------------------------
===============================================================









===============================================================
III. Understanding the Base Features & Syntax (25)
---------------------------------------------------------------
25. Module Introduction - 0:38
------------------------------
---------------------------------------------------------------
26. The Build Workflow - 8:00
------------------------------
WHY?
- optimize code
- use ES6/ES7
- build workflow
- more productivity! // CSS autoprefixing, linting
HOW?
- dependency management tool // npm or yarn
- bundler // Webpack
- compiler // Babel + presets
- development server // local machine
---------------------------------------------------------------
27. Using Create React App - 5:22
------------------------------
sudo npm install create-react-app -g
create-react-app react-complete-guide
npm start // http://localhost:3000/
---------------------------------------------------------------
28. Understanding the Folder Structure - 8:11 - ide-setup.pdf
------------------------------
manifest.json // metadata file - info about the app
---------------------------------------------------------------
29. Understanding Component Basics - 5:32 
------------------------------
// components-learning-card.pdf
- create JS Class inheriting from React / rendering a component
- render it to the DOM / one root component
---------------------------------------------------------------
30. Understanding JSX - 5:38
------------------------------
return (
      <div className="App">
        <h1>Hello React</h1>
      </div>
    );
--------------// same as:
return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hello React'));
---------------------------------------------------------------
31. JSX Restrictions - 3:09
------------------------------
- keyword limitation
---------------------------------------------------------------
32. Creating a Functional Component - 8:09
------------------------------
// App.js
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>Some paragraph</p>
        <Person/>
      </div>
    );
  }
}
// Person/Person.js
import React from 'react';
import './Person.css';

const person = () => {
    return <p>I'm a Person!</p>
}

export default person;
---------------------------------------------------------------
33. Components & JSX Cheat Sheet - 0:00 - components.pdf
------------------------------
A) Functional components (also referred to as "presentational", "dumb" or "stateless" components - more about this later in the course) => const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is recommended but optional)
B) class-based components (also referred to as "containers", "smart" or "stateful" components) => class Cmp extends Component { render () { return <div>some JSX</div> } }
---------------------------------------------------------------
34. Working with Components & Re-Using Them - 1:47
------------------------------
<Person/>
<Person/>
<Person/>
<Person/>
...
---------------------------------------------------------------
35. Outputting Dynamic Content - 3:02
------------------------------
// curly braces
const person = () => {
    let age = Math.floor(Math.random() * 30);
    return <p>I'm a Person and I am {age} years old!</p>
}
---------------------------------------------------------------
36. Working with Props - 4:07 - props-learning-card.pdf
------------------------------
const person = (props) => {
    return <p>I'm {props.name} and I am {props.age} years old!</p>
}
-----------
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>Some paragraph</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29"/>
        <Person name="Stephanie" age="26"/>
      </div>
    );
  }
}
---------------------------------------------------------------
37. Understanding the Children Property - 2:56 - base-syntax--01-props-custom-cmp.zip
------------------------------
// for "InnerHTML" in React rendering:
        <Person name="Manu" age="29">My Hobbies: Racing</Person>
// special property of props:
            <p>{props.children}</p> 
            // if any for list item! Otherwise undefined
---------------------------------------------------------------
38. Understanding & Using State - 6:53
------------------------------
// props are managed from outside the component (pass data parent -> child)
// state is managed from inside the component
// state is available from class components and isn't from function components
// state should be used with caution
// state changes lead to component re-rendering
---------------------------------------------------------------
39. Props & State - 0:00 - props&state.pdf
------------------------------
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>Some paragraph</p>
        <button>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}
---------------------------------------------------------------
40. Handling Events with Methods - 3:45
------------------------------
        <button onClick={this.switchNameHandler}>Switch Name</button>
// onClick, not onclick
// just a reference, not an immediate call like this.switchNameHandler()
// typically calling a method of the same class.
---------------------------------------------------------------
41. To Which Events Can You Listen? - 0:00
------------------------------
https://reactjs.org/docs/events.html#supported-events
---------------------------------------------------------------
42. Manipulating the State - 4:56 - state-learning-card.pdf
------------------------------
// this.setState({});

switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ],
      someOtherProperty: 'something'
    });
  }
  // if state or props changes, React updates the code
---------------------------------------------------------------
43. Functional (Stateless) vs Class (Stateful) Components - 3:33
------------------------------
// STATELESS:
// only render sth to the DOM
// are dynamic because of props
// cannon manipulate app state (and should not!)
const person = (props) => {
    // some code changing props
    props.name = '[' + props.name + ']';
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
}
----------------------
// STATEFUL:
// a.k.a. Container
// state should be changed only in few selected components.
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ],
      someOtherProperty: 'something'
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>Some paragraph</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}
---------------------------------------------------------------
44. Passing Method References Between Components - 7:05 - base-syntax--02-state-events.zip
------------------------------
// Passing down a click handler to the child (Child event -> Parent method)
// App.js
        <Person click={this.switchNameHandler} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
// Person.js
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
---------
// explaining Function.prototype.bind()
var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

var boundGetX = module.getX.bind(module);
console.log(boundGetX());
---------
// Passing a value to the child function using Function.prototype.bind()
switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 }
      ]
  }
  // (...)
        <button onClick={this.switchNameHandler.bind(this, 'Maximilan')}>Switch Name</button>
        <Person click={this.switchNameHandler.bind(this, 'Max!!!')} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
-------
// Alternative syntax - using a closure
        <button onClick={() => this.switchNameHandler('MAXXX')}>Switch Name</button>
// same as: { () => return this.switchNameHandler() }
// not called immediately, same as in the first state example.
---------------------------------------------------------------
45. Adding Two Way Binding - 6:51
------------------------------
// Person.js
            <input type="text" onChange={props.changed} value={props.name}/>
// App.js
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stefi', age: 26 }
      ],
      someOtherProperty: 'something'
    });
  }
  // (...)
   <Person changed={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Racing</Person>
---------------------------------------------------------------
46. Adding Styling with Stylesheets - 5:28
------------------------------
// Two ways of styling components:
import './App.css';
className="ClassName"
// automatic prefixing
// A) Styling by external file:
.Person {
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
}
---------------------------------------------------------------
47. Working with Inline Styles - 4:15
------------------------------
// B) Styling inline by a JS variable:
render() {
    const style = {
      backgroundColor: '#f0f0f0',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }

    return (
      <button style={style} ... >
---------------------------------------------------------------
Assignment 1: Time to Practice - The Base Syntax - 0:00
------------------------------
---------------------------------------------------------------
48. Useful Resources & Links - 0:00
------------------------------
base-syntax--01-props-custom-cmp.zip
base-syntax--02-state-events.zip
base-syntax--03-finished.zip
---------------------------------------------------------------
===============================================================









===============================================================
IV. Working with Lists and Conditionals (12)
---------------------------------------------------------------
49. Module Introduction - 1:03
------------------------------
---------------------------------------------------------------
50. Rendering Content Conditionally - 10:09 // jsx-conditionals-learning-card.pdf
------------------------------
togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }
//----------
 <button style={style} onClick={this.togglePersonsHandler}>Switch Name</button>
        {
          this.state.showPersons ?
          <div>
            <Person click={this.switchNameHandler.bind(this, 'Max!!!')} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person changed={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Racing</Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
          </div> : null
        }
// this syntax leads to confusions, but there's an alternative
---------------------------------------------------------------
51. Handling Dynamic Content "The JavaScript Way" - 4:49 // lists-conditionals--01-conditional-content.zip
------------------------------ 
let persons = null;

if (this.state.showPersons) {
      persons = (
        <div>
          <Person click={this.switchNameHandler.bind(this, 'Max!!!')} name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person changed={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age}> My Hobbies: Racing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
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
---------------------------------------------------------------
52. Outputting Lists (Intro) - 1:31
------------------------------
// how to output list from JSON/array of objects?

---------------------------------------------------------------
53. Outputting Lists - 5:32 // jsx-lists-learning-card.pdf
------------------------------
persons = (
        <div>
          {
            this.state.persons.map((person) => {
              return <Person name={person.name} age={person.age} />
            });
          }
        </div>
      );
---------------------------------------------------------------
54. Lists & State - 4:12
------------------------------


------------------------------
getPersons = () => {
    return this.state.persons.map((person) => {
      return <Person name={person.name} age={person.age} />
    });
  }
// ----------
persons = (
        <div>
          {this.getPersons()}
        </div>
      );
---------------------------------------------------------------
55. Updating State Immutably - 2:39
------------------------------



---------------------------------------------------------------
56. Lists & Keys - 4:14
------------------------------



---------------------------------------------------------------
57. Flexible Lists - 7:34 // lists-conditionals--lists-finished.zip
------------------------------



---------------------------------------------------------------
58. Wrap Up - 1:55
------------------------------



---------------------------------------------------------------
Assignment 2: Time to Practice - Lists & Conditionals - 0:00
------------------------------



---------------------------------------------------------------
59. Useful Resources & Links - 0:00
// lists-conditionals--01-conditional-content.zip
// lists-conditionals--lists-finished.zip
------------------------------




---------------------------------------------------------------
===============================================================









===============================================================
V. Styling React Components & Elements (11)
VI. Debugging React Apps (7)
VII. Diving Deeper into Components & React Internals (29)
----------------
VIII. A Real App: The Burger Builder (Basic Version) (40)
IX. Reaching out to the Web (Http / Ajax) (18)
X. Burger Builder Project: Accessing a Server (9)
XI. Multi-Page-Feeling in a Single-Page-App: Routing (33)
XII. Adding Routing to our Burger Project (14)
XIII. Forms and Form Validation (17)
----------------
XIV. Redux (23)
XV. Adding Redux to our Project (10)
XVI. Redux Advanced (16)
XVII. Redux Advanced: Burger Project (22)
XVIII. Adding Authentication to our Burger Project (22)
XIX. Improving our Burger Project (9)
XX. Testing (12)
XXI. Deploying the App to the Web (6)
=============================================================== //354
XXII. Bonus: Working with Webpack (20)
XXIII. Bonus: Next.js (10)
XXIV. Bonus: Animations in React Apps (16)
XXV. Bonus: A Brief Introduction to Redux Saga (13)
XXVI. Bonus: Building the Burger CSS (1)
XXVII. Next Steps and Course Roundup (9)
=============================================================== //423
