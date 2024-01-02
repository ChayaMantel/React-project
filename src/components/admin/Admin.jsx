import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import BusinessData from '../business/BusinessData';

const Admin = () => {
  const [isButtonsDisabled, setisButtonsDisabled] = useState(false);

  useEffect(() => {
    setisButtonsDisabled(false);
  }, []);

  const handleSaveButtonDisabled = () => {
    setisButtonsDisabled(false);
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <BusinessData setisButtonsDisabled={setisButtonsDisabled}
        handleSaveButtonDisabled={handleSaveButtonDisabled} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          margin: 4,
        }}
      >
        <Link to="services">
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: '100px', height: '50px' }}
            disabled={isButtonsDisabled}
          >
            Services
          </Button>
        </Link>

        <Link to="meetings">
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: '100px', height: '50px' }}
            disabled={isButtonsDisabled}
          >
            Meetings
          </Button>
        </Link>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          padding: '2rem',
          width: "100%"
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Admin;
