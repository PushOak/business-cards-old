import { IconButton } from '@mui/material';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import React from 'react';
import { useTheme } from '../../../../providers/ThemeProvider';
import NavItem from '../../../../routes/components/NavItem';
import ROUTES from '../../../../routes/routesModel';

export default function RightNavBar() {

    const {isDark, toggleDarkMode} = useTheme();

    return (
        <>
            <IconButton sx={{ ml: 50 }} onClick={toggleDarkMode}>
                {isDark? <LightModeIcon/> : <DarkModeIcon />}
            </IconButton>
            <NavItem to={ROUTES.LOGIN} label='Login' />
        </>
    )
}
