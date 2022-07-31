import React from "react";
import { TaskList } from "./Todos/TaskList";

export const Todos = () => {
  return (
    <React.Fragment>
      <h3>Todos List</h3>
      <TaskList />
    </React.Fragment>
  );
};
