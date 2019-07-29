import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
export default function Nav() {
	return (
		<ul className="mynav flex-column" style={{ color: '#fff',marginRight:"10px" , }}>
			<li className="nav-item ">
				<NavLink title="Home" className="nav-link " to="/">
					<i className="fas fa-home" style={{ fontSize: '50px', color: '#fff', display: 'block' }} />
					Home
				</NavLink>
			</li>
			<li className="nav-item " style={{ height: '120px' }}>
				<NavLink title="Create Contact" className="nav-link" to="/createcontact">
					<i className="fas fa-plus-square" style={{ fontSize: '50px', color: '#fff', display: 'block' }} />
					Create Contact
				</NavLink>
			</li>

			<li className="nav-item">
				<NavLink title="contacts" className="nav-link" to="/nonblockedcontacts">
					<i className="fas fa-user-check" style={{ fontSize: '50px', color: '#fff', display: 'block' }} />
					Contacts
				</NavLink>
			</li>
			<li className="nav-item " style={{ height: '120px' }}>
				<NavLink title="blocked contacts" className="nav-link " to="/blockedcontacts">
					<i className="fas fa-user-alt-slash" style={{ fontSize: '50px', color: '#fff', display: 'block' }} />
					Blocked Contacts
				</NavLink>
			</li>
		</ul>
	);
}
