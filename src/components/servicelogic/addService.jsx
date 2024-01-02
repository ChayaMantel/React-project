import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import {
  Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button,
} from '@mui/material';
import ServiceStore from '../../dataStores/ServiceStore';
const AddService = observer(({ onClose }) => {
  const { handleSubmit, register } = useForm();
  
  const onSubmit = (data) => {
    ServiceStore.addService(data);
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Add Service</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("id")}
            label="id"
            margin="normal"
            fullWidth   color="secondary"
          />
          <TextField
            {...register("name")}
            label="name"
            margin="normal"
            fullWidth   color="secondary"
          />
          <TextField
            {...register("description")}
            label="description"
            margin="normal"
            fullWidth   color="secondary"

          />
          <TextField
            {...register("price")}
            label="price"
            margin="normal"
            fullWidth   color="secondary"
          />
          <TextField
            {...register("duration")}
            label="duration"
            margin="normal"
            fullWidth   color="secondary"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>Save</Button>
      </DialogActions>
    </Dialog>
  );
});

export default AddService;
