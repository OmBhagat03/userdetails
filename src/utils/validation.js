export const validateForm = (formData) => {
  const errors = {};

  if (!formData.uname) {
    errors.uname = 'Name is required';
  }
  
  if (!formData.uemail) {
    errors.uemail = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.uemail)) {
    errors.uemail = 'Email is invalid';
  }

  if (!formData.uphone) {
    errors.uphone = 'Phone number is required';
  } else if (!/^\d{10}$/.test(formData.uphone)) {
    errors.uphone = 'Phone number is invalid';
  }

  if (!formData.umessage) {
    errors.umessage = 'Message is required';
  }

  return errors;
};
