import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

export const RectFence = () => {
  const [len, setLen] = useState(0);
  const [b, setB] = useState(0);
  const handleClear = () => {
    setLen(0);
    setB(0);
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <h1>L</h1>
        </Grid>
        <Grid item xs={6}>
          <h1>B</h1>
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={len}
            onChange={(e) => setLen(e.target.value)}
            label="Enter Length"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={b}
            onChange={(e) => setB(e.target.value)}
            label="Enter Width"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained">Calculate</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClear}>
            Clear
          </Button>
        </Grid>
        <Grid item xs={6}>
          <h1>250</h1>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
