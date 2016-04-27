import React from 'react';
import {
	Route,
	IndexRoute,
	Redirect
} from 'react-router';
import Home from "./components/Home";
import ChatApp from "./components/ChatApp"
import NotFound from "./components/NotFound"
import User from "./components/User"

export default (
	<Route path="/"> 
		<IndexRoute component={Home} />
		<Route path="/chat" component={ChatApp} />
		<Route path="/users/:userName" component={User} />
		<Route path="*" component={NotFound} />
	</Route>
);