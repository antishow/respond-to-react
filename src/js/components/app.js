import React from 'react'
import Header from './common/header'

class App extends React.Component{
	constructor(props){
		super(props);
		this.name = "Matt";
	}
	render(){
		return (
			<div className="app">
				<Header name={this.name} />
				<div className="container">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default App