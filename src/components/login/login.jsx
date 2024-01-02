import React from "react";
import { useForm } from "react-hook-form";
import Admin from "../admin/Admin";
import {
    TextField,
    Button,
    Container,
    Box
} from "@mui/material";
import Status from "../../dataStores/Status";

const LoginForm = () => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);

        const response = await fetch("http://localhost:8787/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const statusCode = response.status;

        if (statusCode === 401) {
            setError("name", { type: "manual", message: "Username and password are incorrect" });
        } else if (statusCode === 200) {
            Status.setIsLogin(true);
        }
    };

    return !Status.isLogin ? (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                padding: '2em',
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container component="main" maxWidth="xs">
                    <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        color="secondary"
                        {...register("name", { required: "Username is required" })}

                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        color="secondary"
                        {...register("password", { required: "Password is required" })}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        color="secondary"
                    >
                        Login
                    </Button>
                </Container>
            </form>
        </Box>
    ) : (
        <Admin />
    );
};

export default LoginForm;
