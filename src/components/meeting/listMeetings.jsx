import { observer } from "mobx-react-lite";
import MeetingStore from "../../dataStores/MeetingStore";
import Meeting from "./meeting";
import { Box, Grid } from '@mui/material';

const ListMeeting = observer(() => {

    const meetings = MeetingStore.getMeetings.slice();
    meetings.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
    
    return (<div>

        <Grid container spacing={3} sx={{ pt: 4, pb: 4 }}>
            {meetings.map((meeting, index) => (
                <Grid item xs={12} sm={6} md={4} width={"100vh"} key={index} >
                    <Meeting key={index} serviceType={meeting.serviceType} mydateTime={meeting.dateTime} clientName={meeting.clientName}
                        clientPhone={meeting.clientPhone} clientEmail={meeting.clientEmail} />
                </Grid>
            ))}
        </Grid>
    </div>

    )

});

export default ListMeeting;


