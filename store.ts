import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { nanoid } from "nanoid";

import { Task, TaskState } from "@/app/types";

export const useStore = create<TaskState>((set) => ({
  tasks: [],
  addTask: (description: string) => {
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: nanoid(),
          description,
          completed: false,
        },
      ],
    }));
  },
  removeTask: (id) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
  toggleCompletedState: (id) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? ({ ...task, completed: !task.completed } as Task)
          : task
      ),
    }));
  },
}));
