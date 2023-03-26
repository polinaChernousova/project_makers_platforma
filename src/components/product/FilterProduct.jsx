import {
  Box,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useProductContext } from "../../context/ProductContext";

const FilterProduct = () => {
  const { fetchByParams } = useProductContext();
  return (
    <div style={{ position: "relative" }}>
      <Paper
        sx={{
          position: "absolute",
          p: 5,
          boxShadow: "0",
          backgroundColor: "transparent",
        }}
      >
        <Box>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              onChange={(e) => fetchByParams("category", e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="All" />
              <FormControlLabel
                value="iPhone"
                control={<Radio />}
                label="iPhone"
              />
              <FormControlLabel value="mac" control={<Radio />} label="Mac" />

              <FormControlLabel value="iPad" control={<Radio />} label="iPad" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Paper>
    </div>
  );
};

export default FilterProduct;
