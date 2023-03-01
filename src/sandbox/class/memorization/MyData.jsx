import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import MySpecificData from './MySpecificData';

export default function MyData() {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <MySpecificData text='hello' />
            <MySpecificData text='bye bye' />
            <Button onClick={() => setCounter(prev => prev + 1)}>+</Button>
            <Button onClick={() => setCounter(prev => prev - 1)}>-</Button>
            <Typography>
                {counter}
            </Typography>
        </>
    )
}
