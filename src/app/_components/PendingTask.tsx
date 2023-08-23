"use client";
import React from "react";
import { PendingTaskCard } from "./card/PendingTaskCard";
import { useStore } from "../../../store";

function PendingTask() {
  const { tasks, removeTask, toggleCompletedState } = useStore();

  if (tasks.filter((task) => task.completed === false).length === 0)
    return <h1 className="text-lg font-bold">No pending task!</h1>;

  return (
    <div className="p-10 w-full">
      {tasks
        .filter((task) => task.completed === false)
        .map((task) => (
          <PendingTaskCard
            key={task.id}
            id={task.id}
            onComplete={toggleCompletedState}
            onRemove={removeTask}
            title={task.description}
          />
        ))}
    </div>
  );
}

export default PendingTask;
