export interface Task {
  id: string;
  description: string;
  completed: boolean;
}

export interface TaskList {
  tasks: Task[];
}

export interface TaskState {
  tasks: Task[];
  addTask: (description: string) => void;
  removeTask: (id: string) => void;
  toggleCompletedState: (id: string) => void;
}
