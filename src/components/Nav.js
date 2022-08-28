import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Nav = () => {
  

  return (
    <ul className="nav border">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/">
          Home
        </Link>
      </li>

    
        <Fragment>
          <li className="nav-item">
            <Link className="nav-link" to="/req">
             Verified
            </Link>
          </li>
       
          <li className="nav-item">
            <Link className="nav-link" to="/admin">
              Admin
            </Link>
          </li>
     
        
        </Fragment>
      
    </ul>


  );
};

export default Nav;
