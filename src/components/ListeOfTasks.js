import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

function ListeOfTasks({filter}) {
  const task = useSelector((state) => state.taskReducer.task);
  return (
    <div>
      {task?.filter((el)=>el.done===filter).map((el) => (
        <Task task={el} />
      ))}
    </div>
  );
}

export default ListeOfTasks;
