"use client";
import { useForm } from "react-hook-form";

const CourseSearch = ({getSearchResults}) => {
  const { register, handleSubmit } = useForm();
  const getResults = async (query) => {
    const resp = await fetch(`api/courses/search?query=${query}`);
    const courses = resp.json();
    getSearchResults(courses)
  };

  const onSubmit = data => getResults(data.query)

  
  return (
   
    <form
      className="mb-6 flex items-center space-x-4 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex-1">
        <input
          {...register("query")}
          type="text"
          id="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter course title"
          required
        />
      </div>
      <div>
        {" "}
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default CourseSearch;
