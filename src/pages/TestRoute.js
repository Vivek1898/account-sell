



import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";
import "./test.css"
import Loader from "../components/Loader";
import Error from "../components/Error";
import Review from "../components/review"
import { Link } from "react-router-dom";
import LoadingCard from "../components/loadingCard";
import Testimonials from "../components/testionials"
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
   <Testimonials/>
    <div class="card-deck row " >
      {loading ? (
           <LoadingCard count={6} />
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        maids.map((x) => {
          return (
  



<div class="col-xs-12 col-sm-6 col-md-4">

<div class="card">

  
  <div class="view overlay">
    <img class="card-img-top" src={x.imageurls[0]} alt="Card image cap"/>
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  
  <div class="card-body">

    
    <h4 class="card-title">@{x.name}</h4>
    
    <p class="card-text">{x.description} Followers </p>
    <p>
    <span>
      
<del> {x.address} $</del> <b>{x.rentperday} $</b>

    </span>
    </p>
    <Link to={`/bookmess/${x._id}`}> <button class="btn btn-primary">Book Now</button> </Link>
    {/* <button type="button" class="btn btn-secondary">Book Now</button> */}

  </div>

</div>

</div>












        



          );
        })
        
      )}
    </div>

 <Review/>
    </div>
    
  );
}

export default AdminMaidScreen;