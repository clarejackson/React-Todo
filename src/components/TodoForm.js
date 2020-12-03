// Component will hold your input field and your Add Todo and Clear Completed buttons

// Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: ""
    }
  }

  handleChanges = (e) => {

    console.log(e.target.value);
    this.setState({
      ...this.state,
      newItem: e.target.value
    })
  }

  submitItem = (e) => {
    e.preventDefault();
    this.props.addItem(e, this.state.newItem);
    this.setState({ newItem: ''})
  }

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          value={this.state.newItem}
          onChange={this.handleChanges}
          type="text"
          name="item"
          />
          <button>Submit</button>
      </form>
    )
  }
}

export default TodoForm;