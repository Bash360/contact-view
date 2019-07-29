import React, { useState } from 'react';
export default function SearchInput() {
  function validate() { 
    
  }
  function submit(e) { 
    e.preventDefault();
  }
  return (
    <div style={{display:"inline-flex",width:"40%",height:"100px",marginLeft: "auto",marginRight: "auto",paddingTop: "20px"}}>
    
      <form onSubmit={submit} className="input-group-sm mb-3" style={{width:"40%",marginLeft: "auto",marginRight:"auto", height:"100px"}}>
      <input type="text" style={{ marginTop: "15px" }} className="form-control-lg" required placeholder="Search contacts"
        onInvalid={validate}
      />
        <div className="input-group-lg-append">
          <button className="btn btn-success" type="submit">Search</button>
        </div>
      </form>
      </div>
  );
}
