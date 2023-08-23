import React from "react";

interface Props {
  title: string;
  id: string,
  onComplete: (id: string) => void;
  onRemove: (id: string) => void;
}

export const PendingTaskCard = ({
  id,
  title = "hello?",
  onComplete,
  onRemove,
}: Props): JSX.Element => {
  return (
    <div className="max-w-md rounded-lg bg-white p-10">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <div className="flex flex-row items-stretch justify-between gap-4">
        <button
          onClick={() => onComplete(id)}
          className="w-full cursor-pointer rounded bg-green-500 px-4 py-2 text-center font-semibold text-white hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-opacity-80 focus:ring-offset-2 disabled:opacity-70"
        >
          Complete
        </button>
        <button
          onClick={() => onRemove(id)}
          className="w-full cursor-pointer rounded bg-red-500 px-4 py-2 text-center font-semibold text-white hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-opacity-80 focus:ring-offset-2 disabled:opacity-70"
        >
          Remove
        </button>
      </div>
    </div>
  );
};
