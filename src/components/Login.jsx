import './Home.css'
import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import LoggedUser from './contexts/LoggedUser';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const navigate = useNavigate();
  // get setUser function from context
  const { setUser } = useContext(LoggedUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/login', {
      method: 'POST', 
      headers:{
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((data) =>{
      // console.log('Successfully Logged in', data);
      // alert('Successfully Logged in')
      // set user state
      setUser(data.user);
      // redirect user to aboutus page if userlogin === success
      navigate('/about');
    })
    // catch errs
    .catch((err) =>{
      console.log('Error', err)
    });
  };

  const handleChange = (event) =>{
    const { name, value } = event.target;
    setFormData((prevFormData) =>({
      ...prevFormData, [name]:value
    }));
  };

  return (
    <div className='testlog'>
      <MDBContainer className='my-5' id='login'>
        <MDBCard>

          <MDBRow className='g-0 d-flex align-items-center'>

            <MDBCol md='4'>
              <MDBCardImage src='https://bit.ly/40ntryU' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
            </MDBCol>

            <MDBCol md='8'>

              <MDBCardBody>

                <MDBInput wrapperClass='mb-4' label='Username' id='form1' name='username' type='text' value={formData.username} onChange={handleChange}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='form2' name='password' type='password' value={formData.password} onChange={handleChange}/>

                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                  <a href="/signup">Don't have an account? Click here to sign up</a>
                </div>

                <MDBBtn className="mb-4 w-100" type='submit' onClick={handleSubmit}>Sign in</MDBBtn>

              </MDBCardBody>

            </MDBCol>

          </MDBRow>

        </MDBCard>
      </MDBContainer>
    </div>  
  );
}

export default Login;