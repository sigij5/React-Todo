import React from 'react'
import { render } from '@testing-library/react';


class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        };
    }

    handleChanges = event => {
        this.setState({
            task: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state.task)
        this.setState({
            task:''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='task'
                    value={this.state.task}
                    onChange={this.handleChanges}
                    />
                <button>Add</button>
                <button onClick={this.props.clearCompleted}>Clear Completed Tasks</button>
            </form>
        )
    }
}

export default TodoForm;