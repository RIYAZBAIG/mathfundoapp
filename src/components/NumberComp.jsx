import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { NextNum } from "./Numbers/NextNum";
import { Previous } from "./Numbers/Previous";

export const NumberComp = () => {
  return (
    <Card sx={{ bgcolor: "success.main" }}>
      <CardContent>
        <Typography variant="h4">Numbers</Typography>
        <NextNum />
        <Previous />
      </CardContent>
    </Card>
  );
};
