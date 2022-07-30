import React from "react";
import { data } from "../../services/studata";
import { Grid } from "@mui/material";

export const StudentsOptm = () => {
  console.log(data);
  return (
    <React.Fragment>
      <h1>Student List</h1>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          Sr. No.
        </Grid>
        <Grid item xs={3}>
          Full Name
        </Grid>
        <Grid item xs={3}>
          Age
        </Grid>
        <Grid item xs={3}>
          Gender
        </Grid>
        {data.map((item, index) => (
          <React.Fragment>
            <Grid item xs={3}>
              {index + 1}
            </Grid>
            <Grid item xs={3}>
              {item.fname} {item.lname}
            </Grid>
            <Grid item xs={3}>
              {item.age}
            </Grid>
            <Grid item xs={3}>
              {item.gender}
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </React.Fragment>
  );
};
