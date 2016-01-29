import React from 'react';
import ToDoForm from './todoForm';
import ToDoList from './todoList';
import update from 'react-addons-update';

class ToDoWidget extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            todos: this.loadTodos(),
            newTodo: ''
        };
    }

    saveTodos = () => {
        console.log('Save todos!', this.state.todos);
        localStorage.setItem('respond-to-react-todos', JSON.stringify(this.state.todos));
    };

    loadTodos = () => {
        let defaultTodos = [
            { id: 1, todo: "Create a React.js To-Do List", done: false },
            { id: 2, todo: "Learn a Flux library", done: false }
        ];

        return JSON.parse(localStorage.getItem('respond-to-react-todos')) || defaultTodos;
    };

    handleUpdateToDo = (todo, todoIndex) => {
    	var newTodos = update(this.state.todos, {
    		[todoIndex]: {$set: todo}
    	});

    	this.setState({todos: newTodos}, this.saveTodos);
    };

    handleUpdateNewToDo = (e) => {
        this.setState({newTodo: e.target.value});
    };

    handleCreateNewToDo = (e) => {
        e.preventDefault();

        this.setState({
            newTodo: '',
            todos: this.state.todos.concat([{
                id: this.state.todos.length + 1,
                todo: this.state.newTodo,
                done: false
            }])
        }, this.saveTodos);
    };

    render() {
        return (
        	<div className="to-do-widget">
        		<ToDoForm newTodo={this.state.newTodo} onChange={this.handleUpdateNewToDo} onSubmit={this.handleCreateNewToDo} />
        		<ToDoList todos={this.state.todos} onUpdateToDo={this.handleUpdateToDo} />
        	</div>
        );
    }
}

export default ToDoWidget;
