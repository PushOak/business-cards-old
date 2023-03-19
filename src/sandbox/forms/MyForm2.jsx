import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function MyForm2() {
    const INITIAL_FORM = {
        firstName: "",
        lastName: "",
    };
    const [data, setData] = useState(INITIAL_FORM);
    const navigate = useNavigate();

    const handleChange = ({ target }) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };

    const handleReset = () => {
        setData(INITIAL_FORM);
    };

    const handleCancel = (to) => {
        navigate(to);
    };

    console.log(data);
    return (
        <>
            <Box
                component={"form"}
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("form submitted");
                }}
            >
                <Typography>My Form</Typography>
                <Box>
                    <TextField
                        label="First Name"
                        name="firstName"
                        onChange={handleChange}
                        value={data["firstName"] ? data["firstName"] : ""}
                    />
                    <TextField
                        label="Last Name"
                        name="lastName"
                        onChange={handleChange}
                        value={data["lastName"] ? data["lastName"] : ""}
                    />
                </Box>
                <Box>
                    <Button onClick={handleReset}>Reset</Button>
                    <Button onClick={() => handleCancel("/")}>Cancel</Button>
                    <Button type="submit">Submit</Button>
                </Box>
            </Box>
        </>
    );
}