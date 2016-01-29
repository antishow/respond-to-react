import React from 'react';

class ToDoForm extends React.Component {
    render() {
        return (
        	<form onSubmit={this.props.onSubmit}>
        		<div className="form-group">
							<input 
								type="text" 
								name="todo" 
                                onKeyPress={this.props.onChange}
								placeholder="Enter a new task and press return"
								className="form-control"
							/>
        		</div>
        	</form>
        );
    }
}

export default ToDoForm;
