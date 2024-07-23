import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormComponent from './components/FormComponent';
import TableComponent from './components/TableComponent';

function App() {
  const [formData, setFormData] = useState({
    uname: '',
    uemail: '',
    uphone: '',
    umessage: '',
    index: ''
  });

  const [userData, setUserData] = useState([]);
  const [errors, setErrors] = useState({});

  const getValue = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
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
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    const currentFormData = { ...formData };

    if (formData.index === '') {
      const exists = userData.some(v => v.uemail === formData.uemail || v.uphone === formData.uphone);
      if (exists) {
        toast.error('Email or phone number already exists...');
      } else {
        setUserData([...userData, currentFormData]);
        setFormData({
          uname: '',
          uemail: '',
          uphone: '',
          umessage: '',
          index: ''
        });
        toast('Data added...');
      }
    } else {
      const editIndex = formData.index;
      const exists = userData.some((v, i) => (v.uemail === formData.uemail || v.uphone === formData.uphone) && i !== editIndex);

      if (!exists) {
        const updatedData = [...userData];
        updatedData[editIndex] = currentFormData;
        setUserData(updatedData);
        setFormData({
          uname: '',
          uemail: '',
          uphone: '',
          umessage: '',
          index: ''
        });
        toast('Data updated...');
      } else {
        toast.error('Email or phone number already exists...');
      }
    }
  };

  const deleteData = (index) => {
    setUserData(userData.filter((_, i) => i !== index));
    toast.success('Data deleted successfully...');
  };

  const editRow = (index) => {
    setFormData({ ...userData[index], index });
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Container>
        <Row>
          <Col className='text-center py-5'>
            <h1>Enquiry Now</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <FormComponent formData={formData} getValue={getValue} handleSubmit={handleSubmit} errors={errors} />
          </Col>
          <Col lg={7}>
            <TableComponent userData={userData} editRow={editRow} deleteData={deleteData} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
