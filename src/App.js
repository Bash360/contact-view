import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header/Header';
import Nav from '../src/components/Nav/Nav';
import Home from '../src/components/Home/Home';


function App() {
	return (
		<div className="appContainer">
			<Nav />
			<Header />
			<Home style={{margin: "auto"}}/>
		

		
		
		</div>
	);
}

export default App;
