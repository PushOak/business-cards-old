import React from "react";
import { Divider, Typography } from "@mui/material";
import { string } from "prop-types";

export default function PageHeader({ title, subtitle }) {
  return (
    <>
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <Typography variant="h5">
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </>
  );
};

PageHeader.propTypes = {
  title: string,
  subtitle: string,
};
