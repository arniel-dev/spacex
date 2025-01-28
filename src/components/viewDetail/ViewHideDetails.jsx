/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, Collapse, Typography, Box } from "@mui/material";

const ViewHideDetails = ({ data }) => {
  // State to toggle visibility of the details
  const [showDetails, setShowDetails] = useState(false);

  // Function to handle the toggle action
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Box
      sx={{
        margin: "0 auto",
        padding: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Button to toggle details */}
      <Button
        variant="contained"
        color="primary"
        onClick={toggleDetails}
        sx={{ marginBottom: 2, width: 20 }}
      >
        {showDetails ? "Hide" : "View"}
      </Button>

      {/* Collapse component to show/hide the details */}
      <Collapse in={showDetails}>
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            padding: 2,
            borderRadius: 1,
            boxShadow: 2,
          }}
        >
          <Typography variant="body1">{data?.details}</Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ViewHideDetails;
