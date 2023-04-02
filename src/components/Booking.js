import './Home.css'
import React, {useState} from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';

export default function Booking() {
  const [formData, setFormData] = useState({
    // username
    // username: '',

    // user_id: '',

    // cleaner name: use select, option on form??
    // name: '',
    user_id: '',
    cleaner_id: '',
    start_date: '',
    end_date: '',
    payment_status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let dateValue = value;
    if (name === 'start_date' || name === 'end_date') {
      const date = new Date(value);
      dateValue = date.toISOString().split('T')[0];
    }
    setFormData({
      ...formData,
      [name]: dateValue,
      [`${name}_name`]: e.target.labels[0]?.textContent || '',
    });
  };
  


  const handleSubmit=(e)=>{
    // prevent form's default submission
    // make a post request to the backend
    e.preventDefault()
    fetch('/bookings',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    // .then((res) =>{
      // if(res.ok){
        // post data to backend
        // alert('Booking successfully submitted!')
      // }else{
        // Errors
        // alert('error submitting booking')
      // }
    // })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
  };


  return (
    <>
      <div className="mx-auto gradient-custom mt-5" style={{ maxWidth: '800px', height: '400px', height: '60vh' }}>
        <MDBRow className="pt-3 mx-3" id='booking'>
          <MDBCol md="3">
            <div className="text-center" style={{ marginTop: '50px', marginLeft: '10px'}}>
              <MDBIcon fas icon="shipping-fast text-white" size="3x" />
              <MDBTypography tag="h3" className="text-white">Welcome</MDBTypography>
              <p className="white-text">You are 30 seconds away from completing your Booking!</p>
            </div>
            <div className="text-center">
              <MDBBtn color="white" rounded className="back-button" href='/staff' id='btn2'>Go back</MDBBtn>
            </div>
          </MDBCol>
          <MDBCol md="9" className="justify-content-center">
            <MDBCard className="card-custom pb-4">
              <MDBCardBody className="mt-0 mx-5">
                <div className="text-center mb-3 pb-2 mt-3">
                  <MDBTypography tag="h4" style={{ color: '#495057' }} >Booking Details</MDBTypography>
                </div>

                <form className="mb-0" onSubmit={handleSubmit}>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='Your name' type='text' name='user_id' onChange={handleChange} />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='Cleaner name' type='text' name='cleaner_id' onChange={handleChange}/>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput label='Start-date format:YYYY-MM-DD' type='date' name='start_date' onChange={handleChange}/>
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label='End-date format:YYYY-MM-DD' type='date' name='end_date' onChange={handleChange} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      {/* <MDBInput label='Payment Status' type='text' name='payment' onChange={handleChange} /> */}
                      <MDBInput label='Payment Status' type='text' name='payment' onChange={handleChange}>
                        {/* <select>
                          <option>1</option>
                          <option>2</option>
                        </select> */}
                      </MDBInput>
                    </MDBCol>
                    {/* <MDBCol>
                      <MDBInput label='Email' type='text' />
                    </MDBCol> */}
                  </MDBRow>

                  <div className="float-end">
                    <MDBBtn rounded style={{backgroundColor: '#0062CC'}} id='btn2'>Book</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}