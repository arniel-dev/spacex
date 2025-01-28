import React from "react";
import TextField from "@mui/material/TextField";
// eslint-disable-next-line react/prop-types
function Search({ searchTerm, setFunction }) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setFunction(e.target.value)}
      style={{
        marginBottom: "24px",
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        zIndex: 10,
      }}
    />
  );
}

export default Search;
