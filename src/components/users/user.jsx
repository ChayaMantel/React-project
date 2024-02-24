import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import BusinessData from '../business/BusinessData';
import ListService from '../servicelogic/listService';
import AddMeeting from '../meeting/addMeeting';
import { Box, Button } from '@mui/material';

export default function User() {
  return (
    <>
      <BusinessData />
      <AddMeeting />
      <ListService />
      {/* Button to navigate to the login page */}
      <div style={{ position: 'absolute', top: 0, left: 0, margin: '10px' }}>
        <Button component={Link} to="/admin" variant="contained" color="secondary">
          Go to Login
        </Button>
      </div>
    </>
  );
}
