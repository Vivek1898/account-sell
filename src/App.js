import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Nav from "./components/Nav";

import TestRoute from "./pages/TestRoute"
import MessBookingScreen from "./pages/TestBookingRoute"

import Verify from "./pages/TestVeerifiedRoute"

import AdminScreen from "./pages/AdminScreen"
function App() {
  return (
    <Router>
  
      <Nav />
      <Toaster
        position="buttom-right"
        toastOptions={{
          duration: 2000,
        }}
      />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route
          path="/bookmess/:messid"
          exact
          component={MessBookingScreen}
        />
         <Route exact path="/admin" component={AdminScreen} />
        {/* <Route exact path="/add" component={Add} />
        <Route exact path="/admin" component={admin} />
        <Route exact path="/bookings" component={Bookings} />
        <Route exact path="/admin-verified" component={VerifiedAccounts} /> */}
        <Route exact path="/req" component={Verify} />
        <Route exact path="/" component={TestRoute} />
        

        {/* <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <AuthRoute exact path="/stripe/success" component={StripeSuccess} />
        <AuthRoute exact path="/stripe/cancel" component={StripeCancel} />
        <AuthRoute exact path="/account" component={Account} />
        <AuthRoute exact path="/basic" component={Basic} />
        <AuthRoute exact path="/standard" component={Standard} />
        <AuthRoute exact path="/premium" component={Premium} /> */}
      </Switch>
    </Router>
  );
}

export default App;
