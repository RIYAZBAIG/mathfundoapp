import React, { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import { TechItem } from "./TechItem";

export const TechList = () => {
  const [newTech, setNewTech] = useState("");
  const [data, setData] = useState([]);
  const handleAdd = () => {
    setData([newTech, ...data]);
  };
  return (
    <React.Fragment>
      <h2>Technologies List</h2>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            onChange={(e) => setNewTech(e.target.value)}
            label="Add Technology"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Button onClick={handleAdd} variant="contained" color="warning">
            Add
          </Button>
        </Grid>
        {data.map((item) => (
          <Grid item xs={3}>
            <TechItem item={item} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
