export const validateForm = (formData) => {
    const errors = {};
    if (!formData.uname || formData.uname.length < 4 || !/^[a-zA-Z]+$/.test(formData.uname)) {
      errors.uname = 'Name must be at least 4 characters long and contain only letters.';
    }
    if (!formData.uemail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.uemail)) {
      errors.uemail = 'Invalid email address.';
    }
    if (!formData.uphone || formData.uphone.length !== 10 || !/^\d+$/.test(formData.uphone)) {
      errors.uphone = 'Phone number must be 10 digits and contain only numbers.';
    }
    return errors;
  };
  