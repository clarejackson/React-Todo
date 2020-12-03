// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// Recieves Todos array and iterates over the list to gererate a new <Todo /> for each element in the array

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className='todo-list'>
      {props.todos.map(item => (
        <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <button className='clear-button' onClick={props.clearCompleted}>
        Clear Completed
      </button>
    </div>
  )
}

export default TodoList;
