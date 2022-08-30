



import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";
import "./test.css"
import Loader from "../components/Loader";
import Error from "../components/Error";

import { Link } from "react-router-dom";


function AdminMaidScreen() {
  const [maids, setMaid] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    // { title: "Email", dataIndex: "email", key: "email" },
    // { title: "Mobile", dataIndex: "mobile", key: "mobile" },
    { title: "Price", dataIndex: "price", key: "price" },
  ];

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/getallaundary`)).data;
      setMaid(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchMyData();
  }, []);


  return (
    <div>
   
    {/* <div className="row">
      {loading ? (
        <Loader></Loader>
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        <div className="col-md-12">
          <Table columns={columns} dataSource={maids} />
        </div>
      )}
    </div> */}

    <div class="card-columns text-center " >
      {loading ? (
        <Loader></Loader>
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        maids.map((x) => {
          return (
       
            // <div class="content">
            //   <img  src={x.imageurls[0]}/>
            //   <h3>{x.name}</h3>
            //   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            //   <h6> {x.rentperday}</h6>
            //   <ul>
            //     <li><i class="fa fa-star" aria-hidden="true"></i></li>
            //     <li><i class="fa fa-star" aria-hidden="true"></i></li>
            //     <li><i class="fa fa-star" aria-hidden="true"></i></li>
            //     <li><i class="fa fa-star" aria-hidden="true"></i></li>
            //     <li><i class="fa fa-star" aria-hidden="true"></i></li>
            //   </ul>
            //   <Link to={`/bookmess/${x._id}`}>
            //        <button className="buy-1">Book Now</button>
            //      </Link>
            //   {/* <button class="buy-1">Buy Now</button> */}
            // </div>


<div class="mt-4 mb-4 p-3 ">
               <div class=" card p-4  "> 
               <div class=" image d-flex flex-column justify-content-center align-items-center">
                 <button class="btn btn-secondary">
                   <img  src={x.imageurls[0]} height="100" width="100" /></button> 
                   <span class="name mt-3">{x.name}</span> <span class="idd">@eleanorpena</span>
                    <div class="d-flex flex-row justify-content-center align-items-center gap-2">
                       <span class="idd1">Oxc4c16a645_b21a</span> <span>
                        <i class="fa fa-copy"></i></span> </div>
                         <div class="d-flex flex-row justify-content-center align-items-center mt-3"> 
                         <span class="number">{x.description} <span class="follow">Followers</span></span> 
                   
                         </div>

                         <div class="d-flex flex-row justify-content-center align-items-center mt-1"> 
                         
                         <span class="number">{x.rentperday} ₹ <span class="follow">Rate</span></span>
                         </div>
                         
                          <div class=" d-flex mt-2"> <Link to={`/bookmess/${x._id}`}> <button class="btn1 btn-dark">Book Now</button> </Link></div>
                           <div class="text mt-3"> <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br/><br/> Artist/ Creative Director by Day #NFT minting@ with FND night. </span> </div> <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i class="fa fa-twitter"></i></span> <span><i class="fa fa-facebook-f"></i></span> <span><i class="fa fa-instagram"></i></span> <span><i class="fa fa-linkedin"></i></span> </div>
                            <div class=" px-2 rounded mt-4 date ">
                         <span class="join">Joined May,2021</span> </div> </div> </div>
</div>



        



  // <div class="grid-7 element-animation">

  //   <div class="card color-card">
   
  //     <img src={x.imageurls[0]} alt="profile-pic" class="profile"/>
  //     <h1 class="title">{x.name}</h1>
  //     <p class="job-title"> {x.description}</p>
  //     <div class="desc top">
  //       <p> {x.description}</p>
  //     </div>
  //     {/* <button class="btn color-a top"> Hire me</button> */}
  //     <Link to={`/bookmess/${x._id}`}>
  //                  <button className="btn color-a top">Book Now</button>
  //                </Link>
  //     <hr/>
  //     <div class="container">
  //       <div class="content">
  //         <div class="grid-2">
  //           <button class="color-b circule"> <i class="fab fa-dribbble fa-2x"></i></button>
  //           <h2 class="title">{x.description}</h2>
  //           <p class="followers">Followers</p>
  //         </div>
  //         <div class="grid-2">
  //           <button class="color-c circule"><i class="fab fa-behance fa-2x"></i></button>
  //           <h2 class="title">16k</h2>
  //           <p class="followers">Followers</p>
  //         </div>
  //         <div class="grid-2">
  //           <button class="color-d circule"><i class="fab fa-github-alt fa-2x"></i></button>
  //           <h2 class="title">17.8k</h2>
  //           <p class="followers">Followers</p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>


          
            
            // <div className="card-deck">
            //   <div
            //     className="card"
            //     style={{ margin: "40px", padding: "20px", width: "18rem" }}
            //   >
            //     <img
            //       className="card-img-top"
            //       src={x.imageurls[0]}
            //       alt="First slide"
            //     />
            //     <div className="card-body">
            //       <h5 className="card-title">Instagram Account</h5>
            //       <p className="card-text">Name : {x.name}</p>
            //       <p className="card-text">Price Per Day : {x.rentperday}</p>
            //       {/* <p className="card-text">Mobile : {x.phonenumber}</p>
            //       <p className="card-text">address : {x.address}</p> */}
            //       <p className="card-text">Description : {x.description}</p>
            //       {/* { user &&  x.currentbookings.find(e => e.id === user._id) && <a href="#" className="btn btn-primary">
            //         Already Booked
            //       </a>} */}
                    
            //       {/* {booked && <a href="#" className="btn btn-primary">
            //         Already Booked
            //       </a>} */}
                //    <Link to={`/bookmess/${x._id}`}>
                //    <button className="btn btn-primary mb-2 mr-2">Book Now</button>
                //  </Link>

            //       <p className="card-text">
            //         <small className="text-muted">
            //           Last updated 3 mins ago
            //         </small>
            //       </p>
            //     </div>
            //   </div>
            // </div>
          );
        })
      )}
    </div>
    </div>
  );
}

export default AdminMaidScreen;