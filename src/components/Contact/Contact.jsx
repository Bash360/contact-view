import React from 'react';
import './Contact.css';
import pics from  './default.jpg';

function Contacts() { 
  return (
    <React.Fragment>
    <div className="contactContainer">
      
      <img style={{ width: "300px", height: "300px" }} src={pics} alt="profile"></img>
      <p>name</p>
      <p>gender</p>
      <p>phone</p>
      <p>email</p>
      <hr/>
    
    </div>
    <div className="contactContainer">

      <img style={{ width: "300px", height: "300px" }} src={pics} alt="profile"></img>
      <p>name</p>
      <p>gender</p>
      <p>phone</p>
      <p>email</p>
      <hr />

    </div>
    <div className="contactContainer">

      <img style={{ width: "300px", height: "300px" }} src={pics} alt="profile"></img>
      <p>name</p>
      <p>gender</p>
      <p>phone</p>
      <p>email</p>
      <hr />

    </div>
    <div className="contactContainer">

      <img style={{ width: "300px", height: "300px" }} src={pics} alt="profile"></img>
      <p>name</p>
      <p>gender</p>
      <p>phone</p>
      <p>email</p>
      <hr />

      </div>
      <div className="contactContainer">

        <img style={{ width: "300px", height: "300px" }} src={pics} alt="profile"></img>
        <p>name</p>
        <p>gender</p>
        <p>phone</p>
        <p>email</p>
        <hr />

      </div>
      <div className="contactContainer">

        <img style={{ width: "300px", height: "300px" }} src={pics} alt="profile"></img>
        <p>name</p>
        <p>gender</p>
        <p>phone</p>
        <p>email</p>
        <hr />

      </div>
    </React.Fragment>
  );
}
export default Contacts;