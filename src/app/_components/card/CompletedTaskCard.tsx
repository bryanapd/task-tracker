import React from "react";

interface Props {
  title: string;
}

export const CompletedTaskCard = ({ title = "hello?" }: Props): JSX.Element => {
  return (
    <div className="max-w-md rounded-lg bg-white p-10">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
    </div>
  );
};
