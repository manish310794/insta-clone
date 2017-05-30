import React from 'react';
import { browserHistory } from 'react-router';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout(e) {
		e.preventDefault();
 		this.props.logout();
 		browserHistory.push('/');
	}

	render() {
		return (
			<div className="header-container">
				<ul className="header-nav">
					<li className="logo">
						<a href="/">Instagram-Clone</a>
					</li>
					<li><a href="#" onClick={this.handleLogout}>Logout</a></li>
				</ul>
			</div>
		);
	}
}

export default Header;