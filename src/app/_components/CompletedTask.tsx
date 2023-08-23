"use client";
import React from "react";
import { useStore } from "../../../store";

import { CompletedTaskCard } from "./card/CompletedTaskCard";
import { TaskList } from "../types";

function CompletedTask() {
  const { tasks } = useStore();

  if (tasks.filter((task) => task.completed === true).length === 0)
    return <h1 className="text-lg font-bold">No pending task!</h1>;

  return (
    <div className="p-10 w-full">
      {tasks
        .filter((task) => task.completed === true)
        .map((task) => (
          <CompletedTaskCard key={task.id} title={task.description} />
        ))}
    </div>
  );
}

export default CompletedTask;
