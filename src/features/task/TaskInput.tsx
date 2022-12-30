import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { newTask } from "./taskSlice";

const TaskInput = () => {
  const dispatch = useAppDispatch();
  const [editTitle, setEditTitle] = useState("");
  const handleTitlteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(newTask(editTitle));
    setEditTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={editTitle}
        onChange={handleTitlteChange}
        placeholder="Please type in"
      />
      <button>NEW</button>
    </form>
  );
};

export default TaskInput;
