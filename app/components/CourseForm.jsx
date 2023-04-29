
"use client"
import { useForm } from "react-hook-form";

const addCourse = async (coursedata) => {
    const response = await fetch("http://localhost:3000/api/courses", {
      method: "POST",
      body: { ...coursedata },
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    return data;
  };

const CourseForm = () => {
  const { register, handleSubmit } = useForm();
  const onSumbit = (data) => addCourse(data)
  return (
    <form onSubmit={handleSubmit(onSumbit)}>
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Course Title
        </label>
        <input
          {...register("title")}
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter course title"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="link"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Course link
        </label>
        <input
          {...register("link")}
          type="link"
          id="link"
          placeholder="Enter link to the course"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="link"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Course link
        </label>
        <select
          {...register("level")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
          <option value="all levels">All Levels</option>
        </select>
      </div>

      <div className="mb-6">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Course Description
        </label>
        <textarea
          {...register("description")}
          id="description"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default CourseForm;
