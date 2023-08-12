import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  

  return (
    <header className="header">
      <div className="container">
        <Link to="/" style={{textDecoration: "none"}}>
          <h1 className="logo">
            Dynamic Form Builder
          </h1>
        </Link>
        
        <div className="links">
          <Link to="/">Create Form</Link>
          <Link to="/forms">Forms</Link>
          <Link to="/jsondb">JSONdb</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
