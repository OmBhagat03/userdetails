import { useState } from 'react';
import { toast } from 'react-toastify';
import { validateForm } from '../utils/validation';

const useForm = (initialState, userData, setUserData) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const getValue = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm(formData);
    setErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const currentFormData = { ...formData };

    if (formData.index === '') {
      const exists = userData.some(v => v.uemail === formData.uemail || v.uphone === formData.uphone);
      if (exists) {
        toast.error('Email or phone number already exists...');
      } else {
        setUserData([...userData, currentFormData]);
        resetForm();
        toast('Data added...');
      }
    } else {
      const editIndex = formData.index;
      const exists = userData.some((v, i) => (v.uemail === formData.uemail || v.uphone === formData.uphone) && i !== editIndex);
      if (!exists) {
        const updatedData = [...userData];
        updatedData[editIndex] = currentFormData;
        setUserData(updatedData);
        resetForm();
        toast('Data updated...');
      } else {
        toast.error('Email or phone number already exists...');
      }
    }
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return { formData, getValue, handleSubmit, errors };
};

export default useForm;
