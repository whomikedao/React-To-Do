import React, { Component } from 'react';
import PropTypes from 'prop-types';

//STEP 9: Made TodoItem component now import it to the Todos.js
//STEP 11: change your p tag to {this.props.todo.title}
class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>
            {this.props.todo.title}
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
