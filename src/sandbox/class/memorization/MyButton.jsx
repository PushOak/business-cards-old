
import { Button } from "@mui/material";
import React, { memo } from "react";

export default memo(function MyButton({ handleClick, children }) {
    console.log('Component ' + children);
    return <Button onClick={handleClick}>{children}</Button>;
});