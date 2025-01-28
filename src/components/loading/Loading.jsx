/* eslint-disable react/prop-types */
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
function Loading({ isLoading }) {
  return (
    <div
      style={{
        display: isLoading ? "flex" : "none",
        justifyContent: "center",
        margin: "16px 0",
      }}
    >
      <CircularProgress />
    </div>
  );
}

export default Loading;
