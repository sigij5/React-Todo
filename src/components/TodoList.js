// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

import TodoForm from './TodoForm'

const TodoList = props => {

return (
    <div className='todo-list'>
        {props.tasks.map(task => (
            <Todo key={task.id} task={task} toggleTask={props.toggleTask}/>
        ))}

        <TodoForm addTask={props.addTask} clearCompleted={props.clearCompleted}/>
    </div>
);
};

export default TodoList

