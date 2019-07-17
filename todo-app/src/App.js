import React, { Component } from 'react';
import './App.css';
//STEP 4: import Todos
import Todos from './components/Todos';
//STEP 29: import Header and on top of the Todos
import Header from './layout/header';
//STEP 30: Now to make an Add Todo input in components
import AddTodo from './components/AddTodo';
//STEP 38: import uuid
import uuid from 'uuid';
//STEP 40: Now we start with React Router and install it
  //$npm install react-router-dom
//STEP 43: Import Browser Router and router
  //we also have to wrap the whole app inside router where render is
import { BrowserRouter as Router, Route } from 'react-router-dom';
//STEP 45: import About
import About from './pages/About';

class App extends Component {
  //STEP 6: Add state. Some components typically use different components
    //but sometimes you need to make a state that multiple components can access
    //soo all of the todos will be in the App.js file
    //So we created an object called "todos" 
    //then todos will have an array of objects
    //each object will have an id, title, and completed boolean
  //STEP 39: replaced the hardcoded id with uuid
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'eat with the wife',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
//STEP 22: Now we have to change the completed 
  //so rather than settind todo.completed = true we need to have it toggle otherwise it'll just stay true
  //todo.completed = !todo.completed or basically the opposite of what it was
//STEP 23: Add delete button in TodoItem
//TOGGLE COMPLETE
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo=>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }

  //DELETE TODO
  //STEP 26: adding the delete function
    //basically copy everything that is already there and then use the spread operator "..."
    //filter for each todo, return any todo that where the id is not equal that is passed in
  //STEP 27: make a header for function markup
  delTodo = (id) =>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  //ADD TODO
  //STEP 37: now to add a function to add the value
    //now to add it to our state
    //the way to do that is by of course setState and the spread operator because we can't change it, we have to make a copy of it
    //added a new constance 
    //now for the ID we installed npm install uuid
  addTodo = (title) =>{
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

//STEP 1: Create the initial App template
//STEP 2: Create a components folder in src and create a file called Todos.js capitalized then go to it
//STEP 5: To use the Todos component, add it in to the "App" div
//STEP 7: Now we want to add todos component from our main App state to our todos props
  //so we add todos={this.state.todos}
  //this takes the todo in our state and passes through our todos as a prop
//STEP 19: now added to the Todos div
//STEP 20: Now we need an id to let the app knows which one is completed by going to to TodoItem

//STEP 32: MADE ANOTHER DIV CONTAINER 
//STEP 44: Wrap the whole thing insdie Render
  //So now the thing is that we want the todo list as our homepage but we have two components that make up that page
  //doing one component is easy but for two you have to use render props
  //so to do the route we'll add the path, then render and return the AddTodo and Todos insides the React Fragment
//STEP 46: Add a route to the About page
  //one problem you'll run into is that if both path places "/" and "/about" uses the same slash
  //then make the home page the exact path
//STEP 47: Now we need to add links for the user to go to the about me page and back to the home page
  //we'll add that to the header page since that's where it would be
  //for other projects this could be the navigation page
  render(){
    console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
          </div>  
        </div>
      </Router>
    );
  }  
}

export default App;
