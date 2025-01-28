/* eslint-disable react/prop-types */

import React from "react";
import Typography from "@mui/material/Typography";

function ShowError({ isError, message }) {
  return (
    <Typography
      color="error"
      align="center"
      style={{ display: isError ? "flex" : "none", margin: "16px 0" }}
    >
      {message}
    </Typography>
  );
}

export default ShowError;
