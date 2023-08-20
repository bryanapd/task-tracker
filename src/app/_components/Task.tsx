"use client";
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const taskSchema = z.object({
  title: z.string(),
  description: z.string(),
});

type FormData = z.infer<typeof taskSchema>;

function Task() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("is submitting?", isSubmitting);
    console.log("data", data);
  };

  console.log('errors', errors)

  return (
    <div className="max-w-md rounded-lg bg-white p-10">
      <form action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative">
          <input
            {...register("title", { required: true })}
            id="title"
            name="title"
            type="text"
            placeholder="Task Title"
            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
            autoComplete="off"
          />
          {errors?.title && (
            <p className="text-red-600 text-sm">{errors?.title?.message}</p>
          )}
          <label
            className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
            htmlFor="title"
          >
            Title
          </label>
        </div>
        <div className="mt-10 relative">
          <input
            {...register("description", { required: true })}
            id="description"
            name="description"
            type="text"
            placeholder="Task Description"
            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-rose-600 focus:outline-none"
            autoComplete="off"
          />
          {errors?.description && (
            <p className="text-red-600 text-sm">
              {errors?.description?.message}
            </p>
          )}
          <label
            className="absolute -top-3.5 left-0 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
            htmlFor="description"
          >
            Description
          </label>
        </div>

        <button
          type="submit"
          disabled={!isDirty || !isValid || isSubmitting}
          className="mt-20 block w-full cursor-pointer rounded bg-rose-500 px-4 py-2 text-center font-semibold text-white hover:bg-rose-400 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-opacity-80 focus:ring-offset-2 disabled:opacity-70"
        >
          {isSubmitting ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="inline w-6 h-6 mr-2 text-white animate-spin fill-rose-600 opacity-100"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG for Spinner Animation */}
              </svg>
            </div>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </div>
  );
}

export default Task;
