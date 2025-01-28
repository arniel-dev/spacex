/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, Collapse, Typography, Box, Link } from "@mui/material";

const ViewHideDetails = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const showVideoLink = !!data.links.video_link;

  return (
    <Box
      sx={{
        margin: "0 auto",
        padding: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Collapse in={showDetails}>
        <div style={{ display: "flex", marginBottom: "8px" }}>
          <span>{`text hour | `}</span>
          <Link
            href={data?.links.video_link}
            underline="none"
            style={{
              display: showVideoLink ? "inline" : "none",
              marginLeft: 4,
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Video
          </Link>
        </div>

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

      <Button
        variant="contained"
        color="primary"
        onClick={toggleDetails}
        sx={{ marginTop: 2, width: 20 }}
      >
        {showDetails ? "Hide" : "View"}
      </Button>
    </Box>
  );
};

export default ViewHideDetails;
