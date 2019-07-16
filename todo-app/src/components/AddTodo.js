import React, { Component } from 'react';

//STEP 31 MAKE THE FORM AND INPUT AND STYLE
class AddTodo extends Component {
//STEP 33: usually when you have an input field, you want to have a state value for it
    //then add the value in the input and set it as the title
    //you'd need to have an onChange because React constantly updates
    //ie, you type 'a' andit'll leave it as title
    state = {
        title: ''
    }    

//STEP 34: add onChange function
    //don't need to go to App.js
    //this is an example of component state
    //the Todos are app level state
    //this state is in this particular AddTodo component
    //e.target.value gets us whatever we type in 
    onChange = (e) => this.setState({ title: e.target.value });

//STEP 36: Add an onSubmit function
    //since it's a submit it'll try to go to the following file
    //add e.preventDefault
    //then add a props method becuse we'd have to pass the title up 
    //then do a setState to change the title back to nothing basically to clear the field 
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }


//STEP 35: now we add an onsubmit
  render() {
    return (
        <form onSubmit={this.onSubmit}style={{display: 'flex'}}>
            <input 
                type="text" 
                name="title" 
                style={{flex: '10', padding: '5px'}}
                placeholder="Add Todo"
                value={this.state.title}
                onChange={this.onChange}
                />
            <input 
                type="submit"
                value="Submit"
                className="btn"
                style={{flex: '1'}}/>
        </form>
    )
  }
}

export default AddTodo
