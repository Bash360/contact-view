import React from 'react';
import './Contact.css';
import pics from './default.jpg';
import PropTypes from 'prop-types';

function Contact(props) {
	return (
		<React.Fragment>
			<div className="contactContainer">
				<img style={{ width: '300px', height: '300px' }} src={props.pics} alt="profile" />
				<p>
					Name: {props.firstName} {props.lastName}
				</p>
				<p>Gender: {props.gender}</p>
				<p>Phone: {props.phone}</p>
				<p>Email: {props.email}</p>
				<hr />
			</div>
		</React.Fragment>
	);
}
Contact.defaultProps = { pics };
Contact.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	gender: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired
};
export default Contact;
