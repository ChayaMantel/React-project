
import dayjs from 'dayjs';
import { observer } from 'mobx-react-lite';
import { Box, Card, CardContent, Typography } from "@mui/material";
const Meeting = observer(({ serviceType, mydateTime, clientName, clientPhone, clientEmail }) => {
  const update = dayjs(mydateTime);
  const today = dayjs();
  const style = {
    color:
      update.isSame(today, 'day') ? 'red' :
        update.isBetween(today, today.add(7, 'day'), 'day') ? 'orange' : 'green',
    pt: 5,
    pb: 6,
    padding: 3,
  };

  return (
    <div >
      <Card >
        <Box sx={style}>
          <Typography variant="h5">Meeting Details</Typography>
          <br></br>
          <Typography variant="body2">Client Name: {clientName}</Typography>
          <Typography variant="body2">Client Phone: {clientPhone}</Typography>
          <Typography variant="body2">Client Email: {clientEmail}</Typography>
          <Typography variant="body2">Service Type: {serviceType}</Typography>
          <Typography variant="body2">Date & Time: {update.format('YYYY-MM-DD HH:mm')}</Typography>

        </Box>
      </Card>
    </div>
  );
});

export default Meeting;
