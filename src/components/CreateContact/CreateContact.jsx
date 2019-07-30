import React, { useState, useEffect } from 'react';
import InputField from '../InputField/InputField.jsx';
import './createContact.css';


export default function CreateContact() {
	const [formDetails, setFormDetails] = useState({ image: null });
	let { firstname, lastname, email, phone, gender, image } = formDetails;
	const handleChange = function (event) {
		if (event.target.checked) {
			setFormDetails({ ...formDetails, [event.target.name]: event.target.value });
		} else if (event.target.files) {
			let reader = new FileReader();
			reader.onload = function (evt) {
				setFormDetails({ ...formDetails, image: evt.target.result });
			};
			reader.readAsDataURL(event.target.files[0]);
		} else {
			setFormDetails({ ...formDetails, [event.target.name]: event.target.value });
			
		}
		};
	
		return (
			<div className="containerforlogin" style={{ height: '1000px' }}>
				<form className="containerLogin">
					<h3>Create Contact</h3>

					<label htmlFor="firstname">First Name</label>
					<InputField
						id="firstname"
						name="firstname"
						className="inputField"
						placeholder="Enter first name"
						type="text"
						change={handleChange}
						value={firstname}
					/>
					<label htmlFor="lastname">Last Name</label>
					<InputField
						id="lastname"
						name="lastname"
						className="inputField"
						placeholder="Enter last name"
						type="text"
						change={handleChange}
						value={lastname}
					/>
					<label htmlFor="email">Email</label>
					<InputField
						id="email"
						name="email"
						className="inputField"
						placeholder="Enter mail"
						type="email"
						change={handleChange}
						value={email}
					/>
					<label htmlFor="phone">Phone</label>
					<InputField
						id="phone"
						name="phone"
						className="inputField"
						placeholder="Enter phone number eg 08182988304"
						type="tel"
						pattern="\d{11}"
						change={handleChange}
						value={phone}
					/>
					<div id="gender">
						<p>Gender</p>
					</div>
					<div style={{ display: 'flex', alignContent: 'center', width: '45%', marginBottom: '5px' }}>
						<label style={{ margin: '5px' }} htmlFor="male">
							Male
					</label>
						<input
							
							checked={gender === 'male'}
							onChange={handleChange}
							value="male"
							id="male"
							name="gender"
							type="radio"
							required
						/>
						<label style={{ margin: '5px' }} htmlFor="female">
							Female
					</label>
						<input
							checked={gender === 'female'}
							onChange={handleChange}
							value="female"
							id="female"
							name="gender"
							type="radio"
							required
						/>
					</div>
				
					<label htmlFor="image" style={{ borderBottom: '0px' }}>
						Choose a picture:
				</label>
					<InputField  change={handleChange} accept="image/*" name="image" className="inputField" type="file" />
					{image !== null && <img id="thumbnail" src={image} className="thumbnail" alt="" />}

				
					<div className="input-group-lg-append" style={{marginTop: "10px"}}>
						<button className="btn btn-success" type="submit">Create Contact</button>
					</div>
					
				</form>
			</div>
		);
	}
