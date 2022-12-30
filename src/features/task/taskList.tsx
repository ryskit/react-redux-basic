import React from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "./taskSlice";
import { useAppSelector } from "../../app/hooks";
import TaskItem from "./taskItem";

const TaskList = () => {
  const tasks = useAppSelector(selectTasks);
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;
