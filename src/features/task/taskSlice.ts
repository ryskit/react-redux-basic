import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface Task {
  id: number;
  title: string;
  complete: boolean;
}

export interface TaskState {
  idCount: number;
  tasks: Task[];
}

const initialState: TaskState = {
  idCount: 3,
  tasks: [
    { id: 3, title: "Task C", complete: false },
    { id: 2, title: "Task B", complete: false },
    { id: 1, title: "Task A", complete: true },
  ],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    newTask: (state, action: PayloadAction<string>) => {
      state.idCount++;
      const newItem: Task = {
        id: state.idCount,
        title: action.payload,
        complete: false,
      };
      state.tasks = [newItem, ...state.tasks];
    },
    completeTask: (state, action: PayloadAction<Task>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.complete = !task.complete;
      }
    },
    deleteTask: (state, action: PayloadAction<Task>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const { newTask, completeTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state: RootState) => state.task.tasks;

export default taskSlice.reducer;
