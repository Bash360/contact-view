import React from 'react';
import './404.css';
import errorImage from './404.gif';
export default function FourOFour() {
  const handleClick=()=>{
    window.history.back();
  } 
  return (
    <div className="error">
      <h1>Page Not Found!!! </h1>
      <div style={{width:"40%",margin:"auto" , textAlign: "center", padding: "5px"}} >
       
        <div className="input-group-lg-append">
          <button style={{ borderRadius: "5px", fontSize: "1.4rem", cursor: "pointer" }} onClick={handleClick} className="btn btn-primary" type="submit">Go Back</button>
        </div>
					</div>
      <img className="gif-block" src={errorImage} alt="error page" />
      
      
    </div>
  );
}