/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import ViewHideDetails from "../viewDetail/ViewHideDetails";
function LaunchDetail({ data = [] }) {
  const [showDetail, setShowDetails] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {data?.map((launch, idx) => (
        <Card
          key={launch.flight_number + idx}
          variant="outlined"
          sx={{ display: "flex" }}
        >
          <CardContent>
            <div style={{ display: "flex" }}>
              <Typography variant="h4" gutterBottom>
                {launch.mission_name}
              </Typography>
              <Chip
                sx={handleStyle(launch)}
                label={handleChipStatusLabel(launch)}
              />
            </div>

            <ViewHideDetails data={launch} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
function handleChipStatusLabel(data) {
  const { launch_success, upcoming } = data;
  if (launch_success && !upcoming) {
    return "success";
  }
  if (!launch_success && upcoming) {
    return "upcoming";
  }
  if (!launch_success && !upcoming) {
    return "fail";
  }
  return "";
}
function handleStyle(data) {
  const { launch_success, upcoming } = data;
  if (launch_success && !upcoming) {
    return { background: "#35fc03" };
  }
  if (!launch_success && upcoming) {
    return { background: "cyan" };
  }
  if (!launch_success && !upcoming) {
    return { background: "red", color: "white" };
  }
  return "";
}

export default LaunchDetail;
