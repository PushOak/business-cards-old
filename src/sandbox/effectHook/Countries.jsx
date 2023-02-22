import { Typography } from '@mui/material';
import React, { useEffect } from 'react';

export default function Countries() {

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }, []);

    return (
        <div>
            <Typography>
                Countries List
            </Typography>
        </div>
    )
}
