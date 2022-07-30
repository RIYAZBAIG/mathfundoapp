import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { RectFence } from "./Geo/RectFence";
import { Students } from "./Geo/Students";
import { StudentsOptm } from "./Geo/StudentsOptm";
export const Geo = () => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <h2>Geometry</h2>
          <StudentsOptm />
          <Students />
          <RectFence />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
