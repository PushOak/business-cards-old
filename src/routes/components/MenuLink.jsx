import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { string, func } from "prop-types";
import NavBarLink from "./NavBarLink";
import { makeFirstLetterCapital } from "../../layout/header/topNavBar/menu/utils/algoMethods";

const MenuLink = ({ text, navigateTo, onClick, styles }) => {
  return (
    <NavBarLink to={navigateTo}>
      <MenuItem sx={{ ...styles }} onClick={onClick}>
        {makeFirstLetterCapital(text)}
      </MenuItem>
    </NavBarLink>
  );
};

MenuLink.propTypes = {
  navigateTo: string.isRequired,
  onClick: func.isRequired,
  text: string.isRequired,
};

MenuLink.defaultProps = {
  styles: {},
};

export default MenuLink;
