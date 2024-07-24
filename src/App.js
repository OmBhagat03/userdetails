import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormComponent from './components/FormComponent';
import './styles/App.css';

const App = () => {
  const [formData, setFormData] = useState({ uname: '', uemail: '', uphone: '', umessage: '', index: '' });
  const [userData, setUserData] = useState([]);

  const deleteData = (index) => {
    setUserData(userData.filter((_, i) => i !== index));
    toast.success("Data deleted successfully...");
  };

  const editRow = (index) => {
    setFormData({ ...userData[index], index });
  };

  return (
    <div className='container'>
      <ToastContainer /> {/* Ensure ToastContainer is included here */}
      <div className='header'>
        <h1>Enquiry Now</h1>
      </div>
      <div className='row'>
        <div className='col-lg-5'>
          <FormComponent formData={formData} setFormData={setFormData} userData={userData} setUserData={setUserData} />
        </div>
        <div className='col-lg-7'>
          <table className='table'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.length > 0 ? (
                userData.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.uname}</td>
                    <td>{user.uemail}</td>
                    <td>{user.uphone}</td>
                    <td>{user.umessage}</td>
                    <td>
                      <button onClick={() => editRow(index)} className='btn'>Update</button>
                      <button onClick={() => deleteData(index)} className='btn'>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan='6'>No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
