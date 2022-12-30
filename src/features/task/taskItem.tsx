import React from "react";
import { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { Task, completeTask, deleteTask } from "./taskSlice";

type Props = {
  task: Task;
};

const TaskItem: FC<Props> = (props) => {
  const { task } = props;
  const dispatch = useAppDispatch();
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => dispatch(completeTask(task))}
        defaultChecked={task.complete}
      />
      <span>{[task.title]}</span>
      <button onClick={() => dispatch(deleteTask(task))}>❌</button>
    </div>
  );
};

export default TaskItem;
