import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
  const [expandNavbar,setExpandNavbar] = useState(false);
  return (
    <div className="navbar" id= {expandNavbar ? "open" : "close"}>
      <div className = "toggleButton">
        <button
          onClick = {() =>{ setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon/>
        </button>
      </div>
      <div className="Links">   
        <Link to = "/"> Home </Link>
        <Link to = "/experience"> Experience </Link>
        <Link to = "/projects"> Projects </Link>
      </div>  
    </div>
  );
}
export default Navbar;