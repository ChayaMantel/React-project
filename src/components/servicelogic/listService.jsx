import { observer } from "mobx-react-lite";
import { useState } from "react";
import AddService from "../servicelogic/addService";
import Service from "../servicelogic/service";
import Status from "../../dataStores/Status";
import ServiceStore from "../../dataStores/ServiceStore";
import {  Grid } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const ListService = observer(() => {
  const [isAddServiceVisible, setAddServiceVisible] = useState(false);
  const services = ServiceStore.getServices;
  return (
    <>
      {Status.isLogin && (
        <Fab
          color="secondary"
          aria-label="add"
          onClick={() => setAddServiceVisible(true)}
        > 
          <AddIcon />
        </Fab>
      )}
      {isAddServiceVisible && <AddService onClose={() => setAddServiceVisible(false)} />}
      
      <Grid container spacing={3} sx={{ pt: 4, pb: 4 }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4}  key={index} width={"100%"}>
            <Service name={service.name} description={service.description} />
          </Grid>
        ))}
      </Grid>
    </>
  );
});

export default ListService;
