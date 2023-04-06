import { useState } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBTypography } from 'mdb-react-ui-kit';
import './admin/Admin.css'
export default function Booking() {
  const [formData, setFormData] = useState({
    user_id: '',
    cleaner_id: '',
    start_date: '',
    end_date: '',
    payment_status: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      alert('Booking successfully made!');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mx-auto gradient-custom mt-5"  id='book' style={{ maxWidth: '800px', height: '400px' }}>
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
                    <MDBInput label='User ID' type='number' name='user_id' onChange={handleChange} />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label='Cleaner ID' type='number' name='cleaner_id' onChange={handleChange} />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label='Start Date (YYYY-MM-DD)' type='date' name='start_date' onChange={handleChange}/>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="mb-4">
                  <MDBCol>
                    <MDBInput label='End Date (YYYY-MM-DD)' type='date' name='end_date' onChange={handleChange} />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput label='Payment Status' type='text' name='payment_status' onChange={handleChange}/>
                  </MDBCol>
                </MDBRow>

                <div className="float-end">
                  <MDBBtn rounded style={{backgroundColor: '#0062CC'}} id='btn2' type="submit">Book</MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </MDBRow>
      </div>
  
  );
}