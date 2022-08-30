import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./nav.css"

const Nav = () => {
  

  return (
    // <ul className="nav border">
    //   <li className="nav-item">
    //     <Link className="nav-link" aria-current="page" to="/">
    //       Home
    //     </Link>
    //   </li>

    
    //     <Fragment>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/req">
    //          Verified
    //         </Link>
    //       </li>
       
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/admin">
    //           Admin
    //         </Link>
    //       </li>
     
        
    //     </Fragment>
      
    // </ul>
    <div>
    {/* <div class="container" id="top">
  <div class="row">
    <div class="col-md-10 col-sm-12 col-xs-12">
      <ul class=" list-group list-group-horizontal">
        <li><i class='fas fa-envelope-open pr-2'></i><a href="#" class="pr-5"> Admin@mail.com</a></li>
        <li><i class='fas fa-phone pr-2'></i><a href="#" class="pr-3"> +12 365 4789</a></li>
      </ul>
     </div>
    <div class="col-md-2 col-sm-12 col-xs-12 text-left">
      <i class='fab fa-facebook'></i>
      <i class='fab fa-twitter-square'></i>
      <i class='fab fa-google-plus-square'></i>
    </div>
  </div>
</div> */}
<nav class="navbar navbar-expand-md navbar-dark ownbg">
{/* <img src="https://w3hubs.com/wp-content/themes/wpex-magtastico/images/logo.png"/> */}
  <Link class="navbar-brand text-white pl-5" to="/">LOGO</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/req">Verified</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/admin">Admin</Link>
      </li>
       <li class="nav-item">
        <Link class="nav-link" to="#">About</Link>
      </li>     
    </ul>
  </div>  
</nav>
</div>


  );
};

export default Nav;
