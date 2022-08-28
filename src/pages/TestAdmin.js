import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Table, Modal, Input } from "antd";
import { message, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import {useHistory} from 'react-router-dom'
import Loader from "../components/Loader";
import Error from "../components/Error";
import "antd/dist/antd.css";
function AdminRoomScreen() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingStudent, setEditingStudent] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [availablity, setAvailablity] = useState(0);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (record) => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const confirm = async (record) => {
  
    try {
        var id=record._id;
       console.log(id);
     
     
        setLoading(true);
        const result = await axios.post(
          `${process.env.REACT_APP_GLOBAL_API}/api/delete`,
          {id}
        );
        console.log(result)
        setLoading(false);
        Swal.fire(
          "Congratulations",
          "Your Account Deleted Successfullyl",
          "success"
        ).then((result) => {
            fetchMyData();
        
        });
      } catch (error) {
        setError(error);
        console.log(error)
      //   Swal.fire("Opps", "Error:" + error, "error");
      }
      setLoading(false);
     
    };
 
  
  const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
  };

  const columns = [
    {
      title: "roomid",
      dataIndex: "_id",
      key: "_id",
    },
    { title: "uniqueId", dataIndex: "uniqueId", key: "uniqueId" },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    { title: "maxcount", dataIndex: "maxcount", key: "maxcount" },
    { title: "phonenumber", dataIndex: "phonenumber", key: "phonenumber" },
    { title: "rentperday", dataIndex: "rentperday", key: "rentperday" },
    { title: "type", dataIndex: "type", key: "type" },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <div>
        
        <Popconfirm
    title="Are you sure to delete this task?"
    onConfirm={()=>{confirm(record)}}
    onCancel={cancel}
    okText="Yes"
    cancelText="No"
  >
    <a href="#">Delete</a>
  </Popconfirm>
           {/* <DeleteOutlined
            onClick={() => {
              onEditStudent(record);
            }}
            style={{ color: "red", marginLeft: 12 }}
          /> */}
        </div>
      ),
    },
  ];
  async function updateData(record, availablity) {
    setError("");
    setLoading(true);
    console.log(record);
    console.log(availablity);

    try {
      const data = await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/rooms/updateavail`, {
        record,
        availablity,
      });
      console.log(data);
      fetchMyData();
      setIsModalVisible(false);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }

  const onEditStudent = (record) => {
    setEditingStudent(record._id);
    console.log(record._id);



  };
  // const onEditStudent = (record) => {
  //   console.log(record._id)

  // };

  async function fetchMyData() {
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/getallaundary`)).data;
      setRooms(data);
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
    <div className="row">
      {loading ? (
        <Loader></Loader>
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        <div>
          <div className="col md-12">
            <button className="btn btn-success" onClick={fetchMyData}>
              Refresh
            </button>
          </div>
          <div className="col-md-12">
            <Table columns={columns} dataSource={rooms} />
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminRoomScreen;
