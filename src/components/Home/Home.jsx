import React from 'react';
import Contact from '../Contact/Contact.jsx';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import './Home.css';


const contact = gql`{
  users{
    firstName,lastName,gender,phone,email,contactID
  }
  
}`;
 function Home(props) { 
   let users;
   let contactList;
   if (props.data.loading) { 
    users = "....loading contact";
   } else {
     users = props.data.users;
    contactList =users.map(contact => {
       let { firstName, lastName, gender, phone, email, contactID } = contact;
       return <li  key={contactID} ><Contact firstName={firstName} lastName={lastName} email={email} gender={gender} phone={phone} /></li>
     });
   }
  return (
    <ul className="contactsContainer">{contactList}</ul>
  );
 }
export default graphql(contact)(Home);
