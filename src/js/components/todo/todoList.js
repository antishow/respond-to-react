import React from 'react';

class ToDoList extends React.Component {
	render() {
		return (
			<div className="panel panel-default">
				<ul className="list-group">
					{this.props.todos.map( (todo, i) => <ToDoListItem key={todo.id} index={i} todo={todo} onUpdate={this.props.onUpdateToDo} /> )}
				</ul>
			</div>
		);
	}
}

class ToDoListItem extends React.Component {
	handleCheckboxClick = (e) => {
		let updatedToDo = {
			id: this.props.todo.id,
			todo: this.props.todo.todo,
			done: !this.props.todo.done
		};

		this.props.onUpdate(updatedToDo, this.props.index);
	};
	render(){
		let checkboxLabel = this.props.todo.todo;
		if(this.props.todo.done){
			checkboxLabel = <s>{checkboxLabel}</s>;
		}
		return (
			<li className="list-group-item">
				<div className="checkbox">
					<label>
						<input type="checkbox" name="done" checked={this.props.todo.done} onClick={this.handleCheckboxClick} />
						{checkboxLabel}
					</label>
				</div>
			</li>
		);
	}
}

export default ToDoList;
