import React, { useState } from "react";
import { TaskItem } from "./TaskItem";

export const TaskList = () => {
  const [data, setData] = useState([
    "Breakfast",
    "Getting Ready",
    "Goto office",
  ]);
  return (
    <React.Fragment>
      <h5>Task List</h5>
      {data.map((item) => (
        <TaskItem />
      ))}
    </React.Fragment>
  );
};
