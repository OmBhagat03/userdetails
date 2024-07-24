import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import { validateForm } from '../utils/validation';
import '../styles/App.css';

const FormComponent = ({ formData, setFormData, userData, setUserData }) => {
  const [errors, setErrors] = useState({});

  const getValue = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (formData.index === "") {   
      const isExistingUser = userData.some(user => user.uemail === formData.uemail || user.uphone === formData.uphone);
      if (isExistingUser) {
        toast.error("Email or phone number already exists...");
      } else {
        setUserData([...userData, { ...formData, index: userData.length }]);
        setFormData({ uname: '', uemail: '', uphone: '', umessage: '', index: '' });
        toast.success("Data added successfully...");
      }
    } else {
      const editIndex = formData.index;
      const updatedUserData = [...userData];
      updatedUserData[editIndex] = { ...formData };
      setUserData(updatedUserData);
      setFormData({ uname: '', uemail: '', uphone: '', umessage: '', index: '' });
      toast.success("Data updated successfully...");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='form-label'>Name :</label>
          <input
            type='text'
            name='uname'
            value={formData.uname}
            onChange={getValue}
            className='form-control'
          />
          {errors.uname && <p className='error'>{errors.uname}</p>}
        </div>
        <div className='form-group'>
          <label className='form-label'>Email :</label>
          <input
            type='email'
            name='uemail'
            value={formData.uemail}
            onChange={getValue}
            className='form-control'
          />
          {errors.uemail && <p className='error'>{errors.uemail}</p>}
        </div>
        <div className='form-group'>
          <label className='form-label'>Phone :</label>
          <input
            type='text'
            name='uphone'
            value={formData.uphone}
            onChange={getValue}
            className='form-control'
          />
          {errors.uphone && <p className='error'>{errors.uphone}</p>}
        </div>
        <div className='form-group'>
          <label className='form-label'>Message :</label>
          <textarea
            name='umessage'
            value={formData.umessage}
            onChange={getValue}
            className='form-control'
          />
          {errors.umessage && <p className='error'>{errors.umessage}</p>}
        </div>
        <button type='submit' className='btn'>
          {formData.index !== '' ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
