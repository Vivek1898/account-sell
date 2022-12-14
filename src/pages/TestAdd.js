import React, { useState } from "react";
import axios from "axios";
import { Form, Input, InputNumber, Button, Select } from "antd";
import FileUpload from "../components/FileUpload"
import Swal from "sweetalert2";

import Loader from "../components/Loader";
import Error from "../components/Error";
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const initialState = {

  images: [
   
  ],

};
const emptyState = {

  images: [
   
  ],

};

function AdminAddLaundaryScreen() {
  const { Option } = Select;

  const [room, setRoom] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [Imagevalues, setImagevalues] = useState(initialState);
  const [visible, setVisible] = useState(false);
  const[loadingDelete,setLoadingDelete]=useState(false);
  const [Images,setImages]=useState([]);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
   // console.log(values);
    setError("");
    setLoading(true);
    try {
      const data = (await axios.post(`${process.env.REACT_APP_GLOBAL_API}/api/addlaundary`,{Images, values,tokenv:localStorage.getItem("access_token")})).data;
     Swal.fire("Congratulations", "Your Account Added Successfully", "success");
     //alert ("Congratulations Your Account Added Successfully")
      form.resetFields();
      setImagevalues(emptyState)
      setImages(Images.splice(0, Images.length))
      window.location.reload();

    } catch (error) {
      console.log(error);
      setError(error);
      //alert(" Opps Error")
      Swal.fire("Opps", "Error:" + error, "error");
    }

    setLoading(false);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div>
    
    <div className="p-3">
            <FileUpload
            className="p-3"
              Imagevalues={Imagevalues}
              setImagevalues={setImagevalues}
              loadingDelete={loadingDelete}
              setLoadingDelete={setLoadingDelete}
              visible={visible}
              setVisible={setVisible}
              Images={Images}
              setImages={setImages}
       
            />
          </div>
          <div className="row">
      {loading ? (
        <Loader></Loader>
      ) : error.length > 0 ? (
        <Error msg={error}></Error>
      ) : (
        <div className="col-md-12">
          <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
          >
            <Form.Item
              name="name"
              label="name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Followers"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="address"
              label="Fake Price"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phonenumber"
              label="phonenumber"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="rentperday"
              label="Real Price"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber min={1} defaultChecked={1} />
            </Form.Item>
          

            <Form.Item {...tailLayout}>
              <Button type="success" htmlType="submit">
                Add
              </Button>
              <Button type="danger" htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
    </div>
   
  );
}

export default AdminAddLaundaryScreen;
