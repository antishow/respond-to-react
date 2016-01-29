import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/app'
import AboutPage from './components/about/aboutPage'
import HomePage from './components/home/homePage'
import ToDoPage from './components/todo/todoPage'

let AppRouter = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute name="home" path="" component={HomePage} />
			<Route name="about" path="about" component={AboutPage} />
			<Route name="todo" path="todo" component={ToDoPage} />
		</Route>
	</Router>
);

export default AppRouter