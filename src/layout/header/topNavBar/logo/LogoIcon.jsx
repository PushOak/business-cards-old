import React from 'react';
import ROUTES from "../../../../routes/routesModel";
import NavBarLink from '../../../../routes/components/NavBarLink';
import IconButton from '@mui/material/IconButton'
import { Avatar } from '@mui/material';

export default function LogoIcon() {
    return (
        <>
            <NavBarLink to={ROUTES.ROOT}>
                <IconButton>
                    <Avatar src='/assets/images/business-card.png' alt='Business card icon'>IconPic</Avatar>
                </IconButton>
            </NavBarLink>
        </>
    )
}
