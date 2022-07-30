import React from "react";
import { data } from "../../services/studata";

export const Students = () => {
  console.log(data);
  return (
    <React.Fragment>
      <h1>Student List</h1>
    </React.Fragment>
  );
};
