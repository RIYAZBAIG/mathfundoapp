import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { color } from "@mui/system";

export const NumberComp = () => {
  return (
    <Card sx={{ bgcolor: "success.main" }}>
      <CardContent>
        <Typography variant="h4">Numbers</Typography>
      </CardContent>
    </Card>
  );
};
