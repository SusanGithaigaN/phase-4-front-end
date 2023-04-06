import React, { useState } from 'react';
import { MDBInputGroup, MDBBtn } from 'mdb-react-ui-kit';
import './Home.css'
export default function AddCleaner() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [id_no, setIdNo] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCleaner = { name, age, phonenumber, id_no, image_url, experience };
    fetch('/cleaners', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCleaner),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
      alert("Cleaner added successfully!");
  };

  return (
    <>
      <h1 className='join'>Join us</h1>
      <div className='outro' style={{backgroundColor:'aliceblue'}}>
        <p className='state' style={{fontSize:'25px', color:'#000000', 
        textAlign:'center', marginLeft:'3em',marginRight:'3em',
        paddingBottom:'3em', paddingTop:'3em'
          }}>
          Join our team of cleaning professionals and
          experience the satisfaction of transforming homes and offices
          into pristine spaces. As a member of our team, 
          you'll be working with like-minded individuals 
          who are dedicated to delivering outstanding service 
          to our valued clients. We provide comprehensive training, 
          flexible schedules, competitive pay, 
          and opportunities for growth within the company.
          Come be a part of a team that values hard work, teamwork, 
          and customer satisfaction. Apply now
          and start your journey to a fulfilling career with us!</p>
        </div>
      <form onSubmit={handleSubmit} className='add-form'>
        <p style={{textAlign:'center', fontSize:'18px', fontWeight: 'bold'}}>
        Add your personal details here</p>
        <MDBInputGroup className='mb-3'>
          <span className='input-group-text'>Name</span>
          <input
            className='form-control'
            id='name'
            type='text'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </MDBInputGroup>

        <MDBInputGroup className='mb-3'>
          <span className='input-group-text'>Age</span>
          <input
            className='form-control'
            id='age'
            type='number'
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </MDBInputGroup>

        <MDBInputGroup className='mb-3'>
          <span className='input-group-text'>Phone Number</span>
          <input
            className='form-control'
            id='phonenumber'
            type='number'
            value={phonenumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </MDBInputGroup>

        <MDBInputGroup className='mb-3'>
          <span className='input-group-text'>ID Number</span>
          <input
            className='form-control'
            id='idNo'
            type='number'
            value={id_no}
            onChange={(event) => setIdNo(event.target.value)}
          />
        </MDBInputGroup>

        <MDBInputGroup className='mb-3'>
          <span className='input-group-text'>Image URL</span>
          <input
            className='form-control'
            id='image_url'
            type='text'
            value={image_url}
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </MDBInputGroup>

        <MDBInputGroup className='mb-3'>
          <span className='input-group-text'>Experience</span>
          <input
            className='form-control'
            id='experience'
            type='number'
            value={experience}
            onChange={(event) => setExperience(event.target.value)}
          />
        </MDBInputGroup>

        <MDBBtn type='submit'>Submit</MDBBtn>
      </form>
    </>
  );
}
