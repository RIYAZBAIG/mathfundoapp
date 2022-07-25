import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export const Square = () => {
  return (
    <Card sx={{ bgcolor: "crimson" }}>
      <CardContent>
        <Typography variant="h4">Square Number</Typography>
      </CardContent>
    </Card>
  );
};
