import React from 'react'
import {Router, Link} from 'react-router'

class Header extends React.Component{
	render(){
		return (
			<div className="navbar navbar-default navbar-static-top">
				<div className="container">
					<div className="navbar-header">
						<Link className="navbar-brand" to="/">{this.props.name}’s To-Do List</Link>
					</div>
					<ul className="nav navbar-nav">
						<li><Link to="about">About</Link></li>
						<li><Link to="todo">To-Do</Link></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Header