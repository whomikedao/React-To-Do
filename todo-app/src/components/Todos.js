import React, { Component } from 'react';
import TodoItem from './TodoItem';
//STEP 13: todos prop has a prop of todos, so we need to add that as a prop type
import PropTypes from 'prop-types';

//STEP 3: These components will be a class based component.
    //create the class name and export todos and then add it to the App.js
//STEP 8: Now to loop through the array of todos to display the list by using the map method
    //        return this.props.todos.map((todo)=>(
    //                  <h3>
    //                      {todo.title}
    //                  </h3>
    //             ));
    //BUT we don't want to output just the h3 and not just the markup but we want to load a whole new component called todoItem
    //so make a new component called TodoItem.js
//STEP 10: Now instead of {todo.title} it is now just <TodoItem />
    //but it'll say what you had in your TodoItem "hello" 3 times so add todo={todo}
    //remember that todo is being passed as a prop/property
    //so go to STEP 11 in TodoItem
//STEP 12: React wants you to add a unique key for these type of things so add key={todo.id}
class Todos extends Component {
    render() {
        return this.props.todos.map((todo)=>(
                <TodoItem key={todo.id} todo={todo}/>
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
