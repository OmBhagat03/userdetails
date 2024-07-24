import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormContainer from './containers/FormContainer';
import TableContainer from './containers/TableContainer';

function App() {
  const [userData, setUserData] = useState([]);

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
            <FormContainer userData={userData} setUserData={setUserData} />
          </Col>
          <Col lg={7}>
            <TableContainer userData={userData} editRow={editRow} deleteData={deleteData} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
