import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'

const todos = [
  {
    task: 'Dentist appt',
    id: 1,
    completed: false  
  },
  {
    task: 'Doctors appt',
    id: 2,
    completed: false  
  },
  {
    task: 'Vet appt',
    id: 3,
    completed: false  
  }
]

// Display list of todos
// An input field
// A Submit button
// A Clear completed button

// All data lives here
// All handlers live here


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  addItem = (e, item) => {
    console.log('adding item');
    e.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state, 
      todos: [...this.state.todos, newItem]
    })
  }

  toggleItem = (itemId) => {
    console.log('toggling item', itemId);
    console.log('previous state', this.state);
    this.setState({
      ...this.state,
      todos: this.state.todos.map((item => {
        if(itemId === item.id) {
          return {
            ...item,
            completed: !item.completed

          }
        }
        return item
      }))
    })
  }

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((item) => !item.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList 
          clearCompleted={this.clearCompleted}
          todos={this.state.todos}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
