import React, { useState, useEffect } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/users');
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Phone Number</th>
          <th scope='col'>Email</th>
          {/* <th scope='col'>Actions</th> */}
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {Array.isArray(users) && users.map(user => (
          <tr key={user.id}>
            <td>
              <div className='d-flex align-items-center'>
                {/* <img
                  src={`https://mdbootstrap.com/img/new/avatars/${user.id % 10}.jpg`}
                  alt=''
                  style={{ width: '45px', height: '45px' }}
                  className='rounded-circle'
                /> */}
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>{user.id}</p>
                  <p className='text-muted mb-0'>{user.name}</p>
                </div>
              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>{user.tel_no}</p>
              <p className='text-muted mb-0'>{user.email}</p>
            </td>
            <td>
              <MDBBadge color={user.status === 'Active' ? 'success' : 'warning'} pill>
                {user.status}
              </MDBBadge>
            </td>
            {/* <td>{user.position}</td> */}
            <td>
              <MDBBtn color='link' rounded size='sm'>
                Edit
              </MDBBtn>
            </td>
          </tr>
        ))}
      </MDBTableBody>
    </MDBTable>
  );
}
