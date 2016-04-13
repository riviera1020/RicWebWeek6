import React from 'react';
import {
	render
}
from 'react-dom';
import ChatApp from './components/ChatApp';
import './style.css';

render(<ChatApp index={[0, 1, 2]}/>, document.getElementById('root'));