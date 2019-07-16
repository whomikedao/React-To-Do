import React, { Component } from 'react';
import './App.css';
//STEP 4: import Todos
import Todos from './components/Todos';

class App extends Component {
  //STEP 6: Add state. Some components typically use different components
    //but sometimes you need to make a state that multiple components can access
    //soo all of the todos will be in the App.js file
    //So we created an object called "todos" 
    //then todos will have an array of objects
    //each object will have an id, title, and completed boolean
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'eat with the wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: true
      }
    ]
  }

//STEP 1: Create the initial App template
//STEP 2: Create a components folder in src and create a file called Todos.js capitalized then go to it
//STEP 5: To use the Todos component, add it in to the "App" div
//STEP 7: Now we want to add todos component from our main App state to our todos props
  //so we add todos={this.state.todos}
  //this takes the todo in our state and passes through our todos as a prop
  render(){
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }  
}

export default App;
