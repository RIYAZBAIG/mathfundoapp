import React, { useState } from "react";
import { data } from "../../services/studata";
import { StudentItem } from "./StudentItem";
import { Grid } from "@mui/material";

export const StudentsCards = () => {
  const [filt, setFilt] = useState(data);
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        {filt.map((item) => (
          <Grid item xs={4}>
            <StudentItem />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
