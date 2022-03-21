import React from "react";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

const NeighbourhoodDropDown = () => {
  const handleChange = () => {};
  return (
    <FormControl fullWidth>
      <InputLabel>Neighbourhood</InputLabel>
      <Select
        style={{ background: "#71b667", width: "250px" }}
        // value={age}
        label='Neighbourhood'
        onChange={handleChange}
      >
        <MenuItem value={10}>Queenstown</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default NeighbourhoodDropDown;
