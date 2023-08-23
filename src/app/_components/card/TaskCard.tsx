import React from "react";

interface Task {
  title: string;
  description: string;
}

export const ItemCard = ({ title, description }: Task): JSX.Element => {
  return (
    <div className="bg-slate-200 text-black p-8 rounded-md">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
