import React from 'react';
import ReactDOM from 'react-dom';
import ToDoWidget from './todoWidget';

class ToDoPage extends React.Component {
    render() {
        return (
            <div>
                <h1>To-Dos</h1>
                <div className="row">
                    <ToDoWidget />
                </div>
            </div>
        );
    }
}

export default ToDoPage;
