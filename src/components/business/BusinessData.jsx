import React, { useState, createContext } from "react";
import BusinessStore from '../../dataStores/BusinrssStore';
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Status from '../../dataStores/Status';
import UpdateBuisnessdata from './updateBuisnessdata';
import { observer } from "mobx-react-lite";

export const ThemeContext = createContext(null);

const Buisnessdata = observer(({ setisButtonsDisabled, handleSaveButtonDisabled }) => {

  const [edited, setEdited] = useState(false);
  const contextData = { setEdited };
  const data = BusinessStore.getBusiness;
  return (!edited ? (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card sx={{ width: '100vh', maxWidth: 400 }}>
        <CardMedia
          component="img"
          image={data?.logo}
          alt={data?.name}
        />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 2, width: "80%" }}>
          <Typography variant="h5" component="div">
            name: {data?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            address: {data?.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: {data?.phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Owner: {data?.owner}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            description: {data?.description}
          </Typography>

          {Status.isLogin && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                console.log("Button clicked");
                setEdited(true);
                setisButtonsDisabled(true);
              }}
              sx={{ marginTop: 2 }}
            >
              update
            </Button>
          )}
        </CardContent>
      </Card>
    </Box>
  ) : (
    <ThemeContext.Provider value={contextData}>
      <UpdateBuisnessdata
        handleSaveButtonDisabled={handleSaveButtonDisabled} />
    </ThemeContext.Provider>
  ));
});

export default Buisnessdata;
