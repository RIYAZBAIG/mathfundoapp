import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { RectFence } from "./Geo/RectFence";

export const Geo = () => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <h2>Geometry</h2>
          <RectFence />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
