import React from "react";
import { TaskList } from "./Todos/TaskList";
import { TechList } from "./Todos/TechList";
import { DishList } from "./Todos/DishList";

export const Todos = () => {
  return (
    <React.Fragment>
      <h3>Todos List</h3>
      <DishList />
      <TechList />
      <TaskList />
    </React.Fragment>
  );
};
