import React from 'react';
import { Form, Button } from 'react-bootstrap';

const FormComponent = ({ formData, getValue, handleSubmit, errors }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <div className='pb-3'>
        <label className='form-label'>Name :</label>
        <input
          type='text'
          value={formData.uname}
          onChange={getValue}
          name='uname'
          className='form-control'
        />
        {errors.uname && <div className='text-danger'>{errors.uname}</div>}
      </div>
      <div className='pb-3'>
        <label className='form-label'>Email :</label>
        <input
          type='email'
          value={formData.uemail}
          onChange={getValue}
          name='uemail'
          className='form-control'
        />
        {errors.uemail && <div className='text-danger'>{errors.uemail}</div>}
      </div>
      <div className='pb-3'>
        <label className='form-label'>Phone :</label>
        <input
          type='text'
          value={formData.uphone}
          onChange={getValue}
          name='uphone'
          className='form-control'
        />
        {errors.uphone && <div className='text-danger'>{errors.uphone}</div>}
      </div>
      <div className='mb-3'>
        <label className='form-label'>Message :</label>
        <textarea
          name='umessage'
          value={formData.umessage}
          onChange={getValue}
          className='form-control'
          rows='3'
        />
      </div>
      <Button type='submit' className='btn btn-primary'>
        {formData.index !== '' ? 'Update' : 'Save'}
      </Button>
    </Form>
  );
};

export default FormComponent;
