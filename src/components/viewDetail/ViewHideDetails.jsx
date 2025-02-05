/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button, Collapse, Typography, Box, Link } from "@mui/material";
import { timeSinceLaunch } from "../../utils/utils";

const ViewHideDetails = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const showVideoLink = !!data.links.video_link;
  const showArticleLink = !!data.links.article_link;
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
          <span>{timeSinceLaunch(data?.launch_date_utc)}</span>
          {showArticleLink && (
            <span style={{ marginLeft: 4 }}>
              {"|"}
              <Link
                href={data?.links.article_link}
                underline="none"
                style={{
                  display: "inline",
                  marginLeft: 4,
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Article
              </Link>
            </span>
          )}
          {showVideoLink && (
            <span style={{ marginLeft: 4 }}>
              {"|"}
              <Link
                href={data?.links.video_link}
                underline="none"
                style={{
                  display: "inline",
                  marginLeft: 4,
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Video
              </Link>
            </span>
          )}
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
