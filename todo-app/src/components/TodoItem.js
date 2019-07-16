import React, { Component } from 'react';
import PropTypes from 'prop-types';

//STEP 14: ADD PROPERTIES TO DO TODOITEM AS WELL AND CHANGE THE NAME
//STEP 9: Made TodoItem component now import it to the Todos.js
//STEP 11: change your p tag to {this.props.todo.title}
//STEP 15: Now to add styles whenever the user has completed an item
//STEP 16: THEN ADD CHECKBOX
//STEP 17: To make the checkbox actually do something add an onChange
    //we'll add a method and called it markComplete
    //Since we're not using Redux we can't just simply change the completed value to true or false
    //so we have to basically climb the tree
    //the state is in our App.js file and we have to go from:
    //TodoItem > Todos > App and only way to do that is through props
    //onChange changes from this.markComplete to this.props.markComplete

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#F4F4F4',
            padding: '1px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed  ? 'line-through' : 'none'
        }
    }

//STEP 21: now we bind to {this.props.markComplete}
//STEP 24: Add a delete button and style
  render() {
    // const { id, title } = this.props.todo;
    //^ we can use this to just pull the id and title in the {} rather than {this.props.todo.title}
    //by doing {title} instead
    return (
      <div style={ this.getStyle() }>
        <p>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todo.id)}/> {' '}
            {this.props.todo.title}
            <button style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

const btnStyle = {
    background: '#FF0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;
