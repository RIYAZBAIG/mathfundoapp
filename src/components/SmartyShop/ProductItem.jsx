import React from "react";
import { Card, CardContent, Grid, Badge, Rating } from "@mui/material";
export const ProdcutItem = ({ item }) => {
  return (
    <Badge badgeContent={item.price} color="primary">
      <Card sx={{ bgcolor: "coral" }}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Rating value={item.rating.rate} /> ( {item.rating.count} )
            </Grid>
            <Grid item xs={12}>
              <img src={item.image} width="100%" height={200} />
            </Grid>
            <Grid item xs={12}>
              <b>{item.title}</b>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Badge>
  );
};
