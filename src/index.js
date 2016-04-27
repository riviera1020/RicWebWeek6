import React from 'react';
import {
	render
} from 'react-dom';
import {
	Router,
	Route,
	browserHistory
} from 'react-router';
import routes from './routes';
import ChatApp from './components/ChatApp'
import Home from "./components/Home";
import './style.css';

render(<Router history={browserHistory} routes={routes}/>, document.getElementById('root'));