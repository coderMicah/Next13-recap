"use client";
import { useEffect, useState } from "react";
import Courses from "./components/Courses";
import CourseSearch from "./components/CourseSearch";
import Loading from "./loading";


const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const resp = await fetch("/api/courses");
      const data = await resp.json();
      setCourses(data);
      setIsLoading(false);
    };

    fetchCourses();
  }, [courses]);

  function handlePromise(promise) {
    promise.then((value) => {
      setCourses(value);
    });
  }

   if (isLoading) return <Loading />;

  return (
    <div>
      <CourseSearch getSearchResults={(results) => {handlePromise(results)}} />
      <Courses courses={courses} />
    </div>
  );
};

export default HomePage;
