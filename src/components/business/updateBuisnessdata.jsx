import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import BusinessStore from '../../dataStores/BusinrssStore';
import { ThemeContext } from './BusinessData';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const UpdateBusinessdata = observer(({ handleSaveButtonDisabled }) => {
  const { setEdited } = useContext(ThemeContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    BusinessStore.updateBusiness(data);
    setEdited(false);
    handleSaveButtonDisabled();
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Paper elevation={3} style={{ padding: '10px', width: '30%' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField {...register('id')} label="Id" fullWidth margin="normal" />
          <TextField {...register('name')} label="Name" fullWidth margin="normal" />
          <TextField {...register('address')} label="Address" fullWidth margin="normal" />
          <TextField {...register('phone')} label="Phone" fullWidth margin="normal" />
          <TextField {...register('owner')} label="Owner" fullWidth margin="normal" />
          <TextField {...register('logo')} label="Logo" fullWidth margin="normal" />
          <TextField {...register('description')} label="Description" fullWidth margin="normal" />
          <Button fullWidth variant="contained" type="submit" color="secondary" style={{ marginTop: '16px' }}>
            Save
          </Button>
        </form>
      </Paper>
    </Grid>
  );
});

export default UpdateBusinessdata;
