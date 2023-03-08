import { CardMedia } from '@mui/material';
import React, { useContext } from 'react';

export default function CardHead({ image }) {

    return (
        <>
            <CardMedia
                component="img"
                height="140"
                image={image.url}
                alt={image.url}
            />
        </>
    )
}
