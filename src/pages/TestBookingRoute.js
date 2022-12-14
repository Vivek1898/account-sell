import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";
 import Swal from "sweetalert2";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Input } from 'antd';
import {useHistory} from 'react-router-dom'
import LoadingCard from "../components/loadingCard";
import { Button } from 'antd';
import { RightCircleOutlined  } from '@ant-design/icons';
function MessBookingscreen({ match }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [room, setRoom] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalDays, setTotalDays] = useState(0);
  const[Name,setName]=useState("");
  const[Email,setEmail]=useState("");
  const[Mobile,setMobile]=useState("");

  const messid = match.params.messid;
  const fromdate = moment(match.params.fromdate, "DD-MM-YYYY");
  const todate = moment(match.params.todate, "DD-MM-YYYY");


  function ValidateEmail(mail) 
    {
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
      {
        return (true)
      }
      Swal.fire("Opps", "Error:" + " You have entered an invalid email address!", "error");
      //  alert("You have entered an invalid email address!")
        return (false)
    }

  const history = useHistory();
  useEffect(() => {
   
  

    

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

  const onToken = async (token) => {
    console.log(token);


  const bookingDetails = {
    room,
  Name,
  Email,
  Mobile,
    totalAmount,
  
    token,
  };
  console.log(bookingDetails)


  try {
    setLoading(true);
    const result = await axios.post(
      `${process.env.REACT_APP_GLOBAL_API}/api/bookpost`,
      bookingDetails
    );
    setLoading(false);
   // alert(" Congratulations Your Account Booked Successfully, Check Your Email")
    history.push("/");
    Swal.fire(
      "Congratulations",
      "Your Account Booked Successfully, Check Your Email",
      "success"
    ).then((result) => {
      history.push("/");
    
    });
  setEmail("");
  setMobile("");
  setName("");
  } catch (error) {
    setError(error);
    console.log(error)
    Swal.fire("Opps", "Error:" + error, "error");
  }
  setLoading(false);


 
   
  };

  return (
    <div>

    <div className="m-5">
      {loading ? (
        <LoadingCard count={9} />
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        <div className="row justify-content-center mt-5 bs">
          <div className="col-md-6">
          <input type="text" className="form-control mb-4 p-4"   placeholder="Name" value={Name} onChange={e=>setName(e.target.value)} />
          <input type="email"  className="form-control mb-4 p-4" placeholder="Email"  value={Email} onChange={(e)=>{

setEmail(e.target.value)
          }} />
          <input type="mobile"  className="form-control mb-4 p-4" placeholder="Mobile" value={Mobile} onChange={e=> {
            setMobile(e.target.value);
            ValidateEmail(Email)
          }} />
       
           
          </div>
          <div className="col-md-6">
            <div style={{ textAlign: "right" }}>
              <h1>Booking Details</h1>
              <hr />
              <b>
                <p>
                  Name : {room.name}
                </p>
                <img src={room.imageurls[0]} alt="" className="rounded " style={{"width":"50%","height":"50%"}} />
              </b>
            </div>
            <div style={{ textAlign: "right" }}>
              <h1>Amount</h1>
              <hr />
              <b>
             
              
                <p>Total Amount : {totalAmount}</p>
              </b>
            </div>

            <div style={{ float: "right" }}>
              <StripeCheckout
                amount={totalAmount * 100}
                currency="USD"
                token={onToken}
                stripeKey={"pk_test_51LL6J6SD2pPj4zIil25zSBMX0sRU8ioUCji8FGDZs4DYmWnVsfzNjB3aB5V7Ff54njSZn6JFWsXki57AIYbW6rEY00XBYRQlwk"}
              >
                <Button 
               type="primary"
               size="large"
               icon={<RightCircleOutlined />}
               style={{"height":"50px","color":"aliceblue","backgroundColor":"cornflowerblue"}}
              disabled={!Name || !Email || !Mobile}
                >Pay Now</Button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default MessBookingscreen;
