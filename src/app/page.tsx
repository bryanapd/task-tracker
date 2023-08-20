import React from "react";
import Image from "next/image";
import { AppSpacer } from "./_components/Header";
import Task from "./_components/Task";

export default function Home() {
  return (
    <React.Fragment>
      <AppSpacer />
      <main className="bg-gray-200 min-h-screen py-[50px]">
        <div className="bg-gray-100 p-24 rounded-md container mx-auto">
          <div>
            <h1 className="text-2xl font-bold mb-4">Create a Task</h1>
            <Task />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
