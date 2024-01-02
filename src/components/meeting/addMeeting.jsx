import { observer } from "mobx-react-lite";
import { useState, forwardRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
    Dialog, DialogTitle, DialogContent, TextField,
    Button, DialogActions, Select, MenuItem,
} from "@mui/material";
import dayjs from "dayjs";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import MeetingStore from "../../dataStores/MeetingStore";
import ServiceStore from "../../dataStores/ServiceStore";

const AddMeeting = observer(() => {
    const { register, handleSubmit, formState: { errors }, setValue,

    } = useForm();
    useEffect(() => {
        if (!register("serviceType").value) {
            setValue("serviceType", "");
        }
    }, [register, setValue]);
    const [open, setOpen] = useState(false);
    const [text, setText] = useState(" ");
    const [variant, setVariant] = useState(" ");
    const [showDialog, setShowDialog] = useState(false);
    const handleClose = (reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    const Alert = forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const onSubmit = async (data) => {

        const response = await MeetingStore.addMeeting(JSON.stringify(data));
        console.log(response);
        if (response === 200) {
            setOpen(true);
            setText("Meeting scheduled successfully!");
            setVariant("success");
            setShowDialog(false);
        } else if (response === 400) {
            setOpen(true);
            setText("Date is not valid. Choose another date.");
            setVariant("error");
        }
    };
    return (
        <>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                    setShowDialog(true);
                }}
            > Add new meeting</Button>

            <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
                <DialogTitle>Add meeting </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="ID" fullWidth
                            color="secondary" margin="normal"
                            {...register("id", { required: true })}
                        />
                        {errors.id && <span> required</span>}
                        <Select
                            color="secondary"
                            label="serviceType"
                            fullWidth
                            {...register("serviceType", { required: true })}
                            defaultValue=""
                        >
                            {ServiceStore.getServices.map((type, index) => (
                                <MenuItem key={index} value={type?.name}>
                                    {type?.name}
                                </MenuItem>
                            ))}
                        </Select>
                        {errors.serviceType && <span> required</span>}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                label="date time"
                                sx={{ color: errors.dateTime ? "red" : "inherit", margin: 1 }}
                                {...register("dateTime", { required: true })}
                                onChange={(newDateTime) =>
                                    setValue("dateTime", dayjs(newDateTime))
                                }
                            />
                        </LocalizationProvider>
                        {errors.dateTime && <span>This field is required</span>}
                        <TextField
                            label="clientName" fullWidth
                            color="secondary" margin="normal"
                            {...register("clientName", { required: true })}
                        />
                        {errors.clientName && <span>required</span>}
                        <TextField
                            label="Phone"
                            fullWidth
                            margin="normal"
                            color="secondary"
                            {...register("clientPhone", { required: true })}
                        />
                        {errors.clientPhone && <span> required</span>}
                        <TextField
                            label="Email" fullWidth
                            margin="normal" color="secondary"
                            {...register("clientEmail")}
                        />
                        <DialogActions>
                            <Button color="secondary" type="submit">   Add
                            </Button>
                            <Button color="secondary" onClick={() => setShowDialog(false)}>  Close
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={variant} sx={{ width: "100%" }}>
                    {text}
                </Alert>
            </Snackbar>
        </>
    );
});
export default AddMeeting;
