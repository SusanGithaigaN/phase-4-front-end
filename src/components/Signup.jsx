import './Home.css'

import React, {useState} from 'react';
// import { useHistory } from 'react-router-dom';
// useNavigate
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  // MDBCheckbox,
  // MDBIcon
}
from 'mdb-react-ui-kit';

function Signup() {

  const[formData, setFormData] = useState({
    name: '',
    tel_no: '',
    email: '',
    password: '',
    username: ''
  });

  // user redirection
  const history = useNavigate();

  const handleSubmit= (e) => {
    e.preventDefault();
    fetch('https://phase-4-project-jue6.onrender.com/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body:  JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((data) => {
      console.log('User successfully created', data);
      // redirect user to login page if acc === created
      history('/login');
    })
    // catch errors
    // display error on console
    .catch((error) => {
      console.log('Error', error);
    }); 
  };

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData((prevFormData) =>({
      ...prevFormData, [name]:value
    }));
  };
  return (
    <MDBContainer fluid className='signup'>

      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px'}}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Sign up now</h2>
          <form onSubmit={handleSubmit}>
            <MDBRow>
              <MDBCol col='6'>
        
                <MDBInput wrapperClass='mb-4' label='Names' id='form1' name='name' type='text' value={formData.name} onChange={handleChange}/>
              </MDBCol>

              <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4' label='Phone Number ' id='form1' name='tel_no' type='text' value={formData.tel_no} onChange={handleChange}/>
              </MDBCol>
            </MDBRow>

            <MDBCol col='6'>
                <MDBInput wrapperClass='mb-4' label='username' id='form1' name='username' type='text' value={formData.username} onChange={handleChange}/>
              </MDBCol>

            <MDBInput wrapperClass='mb-4' label='Email' id='form1' name='email' type='email' value={formData.email} onChange={handleChange}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form1' name='password' type='password' value={formData.password} onChange={handleChange}/>
            {/* redirect user to sign in page if user===exists */}
            <a href="/login">Already have an account? Click here to sign in</a>
            <MDBBtn className='w-100 mb-4' size='md' type='submit'>sign up</MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Signup;