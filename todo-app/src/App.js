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
        completed: false
      }
    ]
  }
//STEP 22: Now we have to change the completed 
  //so rather than settind todo.completed = true we need to have it toggle otherwise it'll just stay true
  //todo.completed = !todo.completed or basically the opposite of what it was
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }

//STEP 1: Create the initial App template
//STEP 2: Create a components folder in src and create a file called Todos.js capitalized then go to it
//STEP 5: To use the Todos component, add it in to the "App" div
//STEP 7: Now we want to add todos component from our main App state to our todos props
  //so we add todos={this.state.todos}
  //this takes the todo in our state and passes through our todos as a prop
//STEP 19: now added to the Todos div
//STEP 20: Now we need an id to let the app knows which one is completed by going to to TodoItem

  render(){
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }  
}

export default App;
