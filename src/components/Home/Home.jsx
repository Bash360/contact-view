import React from 'react';
import Contact from '../Contact/Contact.jsx';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import './Home.css';


const contact = gql`{
  users{
    firstName,lastName,gender,phone,email,contactID, imageUrl
  }
  
}`;
function Home(props) {
  const getContacts = () => {
     
    if (!props.data.loading) {
      return (Array.isArray(props.data.users)) ? (props.data.users.map(contact => {
        let { firstName, lastName, gender, phone, email, contactID } = contact;
        return <li key={contactID} ><Contact firstName={firstName} lastName={lastName} email={email} gender={gender} phone={phone} /></li>
      })) : "No Contacts";
    
    }
  }

  console.log(props.data)
  return props.data.loading?"...loading contacts": (
    <ul className="contactsContainer">{getContacts()}</ul>
  );
 }
export default graphql(contact)(Home);
