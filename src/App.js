import React from 'react';
import TodoList from './components/TodoList';
import './components/Todo.css'
import './App.css'


const tasks = [
  {
    name: 'Walk the dog',
    id:123,
    completed: false
  },
  {
    name: 'Take out trash',
    id:1234,
    completed: false
  }
];

class App extends React.Component {


  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTask = taskName => {
    const newTask = {
      name: taskName,
      id: new Date(),
      completed: false,
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  toggleTask = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        }
        return task;
      })
    })
  }

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    })
  }

render(){
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} addTask={this.addTask} toggleTask={this.toggleTask} clearCompleted={this.clearCompleted}/>
      </div>
    );
}
}

export default App;
