import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";
 import Swal from "sweetalert2";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Input } from 'antd';
import {useHistory} from 'react-router-dom'


function MessBookingscreen({ match }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [room, setRoom] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDays, setTotalDays] = useState(0);
  const[Name,setName]=useState("");
  const[Email,setEmail]=useState("");
  const[Mobile,setMobile]=useState("");
  const[Price,setPrice]=useState("");

  const messid = match.params.messid;
  const fromdate = moment(match.params.fromdate, "DD-MM-YYYY");
  const todate = moment(match.params.todate, "DD-MM-YYYY");

  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
  
    async function fetchMyAPI() {
      try {
        setError("");
        setLoading(true);
        const data = (
          await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/getpostbyid`, {
            postid: match.params.messid,
          })
        ).data;
        console.log(match.params.messid)
        console.log(data);
        console.log(data.rentperday)
        setTotalAmount(data.rentperday)
        setRoom(data);
      } catch (error) {
        console.log(error);
        setError(error);
      }
      setLoading(false);
    }

    fetchMyAPI();
  }, []);

//   useEffect(() => {
//     // const totaldays = moment.duration(todate.diff(fromdate)).asDays() + 1;
//     // setTotalDays(totaldays);
//     setTotalAmount(totalDays * room.rentperday);
//   }, [room]);

  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        
        const bookingDetails = {
   
        Name,
        Email,
        Mobile,
          Price,
        
        
        };
        console.log(bookingDetails)
      setLoading(true);
      const result = await axios.post(
        `${process.env.REACT_APP_GLOBAL_API}/api/addVerified`,
        bookingDetails
      );
      console.log(result)
      setLoading(false);
      Swal.fire(
        "Congratulations",
        "Your Request Applied Successfully",
        "success"
      ).then((result) => {
        history.push("/");
        
      });
      setEmail("");
      setName("");
      setMobile("");
      setPrice("");
    } catch (error) {
      setError(error);
      console.log(error)
    //   Swal.fire("Opps", "Error:" + error, "error");
    }
    setLoading(false);
    //TESTING CARD
    //https://stripe.com/docs/testing
    //https://www.npmjs.com/package/react-stripe-checkout
    // fetch("/save-stripe-token", {
    //   method: "POST",
    //   body: JSON.stringify(token),
    // }).then((response) => {
    //   response.json().then((data) => {
    //     alert(`We are in business, ${data.email}`);
    //   });
    // });
  };

  return (
    <div>

    <div className="m-5">
      {loading ? (
        <Loader></Loader>
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        <div className="row justify-content-center mt-5 bs">
          <div className="col-md-6">
            <h1>Verified Accounts</h1>
            <form onSubmit={handleSubmit}>
          <input type="text" className="form-control mb-4 p-4"   placeholder="Name" value={Name} onChange={e=>setName(e.target.value)} />
          <input type="text"  className="form-control mb-4 p-4" placeholder="Email"  value={Email} onChange={e=>setEmail(e.target.value)} />
          <input type="text"  className="form-control mb-4 p-4" placeholder="Mobile" value={Mobile} onChange={e=>setMobile(e.target.value)} />
          <input  type="text" className="form-control mb-4 p-4" placeholder="Price" value={Price} onChange={e=>setPrice(e.target.value)} />
          <button
            type="submit"
            className="btn btn-primary btn-block p-2"
             disabled={!Name || !Email || !Mobile || !Price}
          >
           Request a Demo
          </button>
         
          </form>
            {/* <img src={room.imageurls[0]} alt="" className="bigimg" style={{"width":"100%"}} /> */}
          </div>

        </div>
      )}
    </div>
    </div>
  );
}

export default MessBookingscreen;
