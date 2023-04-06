

import '../Home.css'
import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import LoggedUser from '../contexts/LoggedUser';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function AdminLogin() {
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
      navigate('/admin');
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
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          {/* <div className="d-flex flex-row align-items-center justify-content-center"> */}

            {/* <p className="lead fw-normal mb-0 me-3">Sign in </p> */}

            {/* <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn> */}

          {/* </div> */}

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Sign in</p>
          </div>

            <MDBInput wrapperClass='mb-4' label='Username' id='form1' name='username' type='text' value={formData.username} onChange={handleChange}/>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' name='password' type='password' value={formData.password} onChange={handleChange}/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
          <MDBBtn className="mb-4 w-100" type='submit' onClick={handleSubmit}>Sign in</MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/adminsignup" className="link-danger">Register</a></p>
          </div>

        </MDBCol>

      </MDBRow>
    </MDBContainer>
  );
}

export default AdminLogin;