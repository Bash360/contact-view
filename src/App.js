import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header/Header';
import Nav from '../src/components/Nav/Nav';
import Home from '../src/components/Home/Home';
import CreateContact from '../src/components/CreateContact/CreateContact';
import FourOFour from '../src/components/404/404';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({ uri: "http://localhost:5000/graphql" });



function App() {
	return (
		<ApolloProvider client={client}>
		<div className="appContainer">
			<Nav />

			<Header />
			<Switch>
				<Route  exact path="/" component={Home}>
				</Route>
				<Route exact path="/createcontact" component={CreateContact}>
				</Route>
				<Route exact  component={FourOFour}>
				</Route>
		

		
		
			
			</Switch>
			</div>
			</ApolloProvider>
	);
}

export default App;
