import React, {
	Component,
	PropTypes
}
from 'react';
import {
	Link
} from 'react-router';
import ChatApp from './ChatApp';

class Home extends Component {
	static contextTypes = {
		router: PropTypes.object.isRequired
	};

	render() {
		return (
			<div>
				<ul>
					<li><Link to="/chat" activeClassName="active">ChatRoom</Link></li>
				</ul>
			</div>
		);
	}
}

export default Home;