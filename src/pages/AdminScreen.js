import React, { useState, useEffect } from "react";
import AdminAddScreen from "./TestAdd"
import AdminAllPostScreen from "./TestAdmin"
import AdminVerifiedScreen from "./TestAdminVerified"
import AdminBookingScreen from "./TestAdminBooking"
import AdminAccountSell from "./TestAdminSells"
import { Tabs } from "antd";
const { TabPane } = Tabs;

function AdminScreen() {
  
    return (
      <div>
    
    <div className="ml-3 mt-3 mr-3 bs">
        <h1 className="text-center">Admin Panel</h1>
        <Tabs defaultActiveKey="1" >
          <TabPane tab="Add Post" key="1">
            <AdminAddScreen></AdminAddScreen>
          </TabPane>
          <TabPane tab="All Posts" key="2">
            <AdminAllPostScreen></AdminAllPostScreen>
          </TabPane>
          <TabPane tab="Verified-Accounts" key="3">
            <AdminVerifiedScreen></AdminVerifiedScreen>
          </TabPane>
          <TabPane tab="Bookings" key="4">
            <AdminBookingScreen></AdminBookingScreen>
          </TabPane>
          <TabPane tab="Sell Accounts" key="5">
            <AdminAccountSell></AdminAccountSell>
          </TabPane>
         
          
        </Tabs>
      </div>
      
      </div>
    );
  }
  export default AdminScreen;