import React from 'react';
import FormComponent from '../components/FormComponent';
import useForm from '../hook/useForm';

const FormContainer = ({ userData, setUserData }) => {
  const initialState = {
    uname: '',
    uemail: '',
    uphone: '',
    umessage: '',
    index: ''
  };

  const { formData, getValue, handleSubmit, errors } = useForm(initialState, userData, setUserData);

  return (
    <FormComponent formData={formData} getValue={getValue} handleSubmit={handleSubmit} errors={errors} />
  );
};

export default FormContainer;
