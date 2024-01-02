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

    </>
  );
}
