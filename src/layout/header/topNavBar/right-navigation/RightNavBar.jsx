import { Box, IconButton } from '@mui/material';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import React from 'react';
import { useTheme } from '../../../../providers/ThemeProvider';
import NavItem from '../../../../routes/components/NavItem';
import ROUTES from '../../../../routes/routesModel';
import Logged from './Logged';
import NotLogged from './NotLogged';
import { useUser } from '../../../../users/providers/UserProvider';

export default function RightNavBar() {

    const { isDark, toggleDarkMode } = useTheme();
    const { user } = useUser();

    return (
        <>
            <Box sx={{ display: " flex", alignItems: "center" }}>
                <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
                    {isDark ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                {/* <NavItem to={ROUTES.LOGIN} label='Login' /> */}
                {user && <Logged />}
                {!user && <NotLogged />}
            </Box>
        </>
    );
}
