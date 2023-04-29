"use client"
import Link from "next/link";
import Loading from "../loading";

// async function fetchCourse(params) {
//   const response = await fetch("http://localhost:3000/api/courses");
//   const courses = await response.json();
//   return courses;
// }

const Courses = ({ courses }) => {
  // const courses = await fetchCourse();
  if (!courses) return <Loading />;
  return (
    <div>
      {courses.map((course) => (
        <div
          key={course.id}
          className=" bg-gray-900 p-4 my-4 transition ease-in-out hover:-translate-y-1 hover:bg-gray-800 duration-150"
        >
          <h3 className="text-2xl font-semibold capitalize">{course.title}</h3>
          <small>{course.level}</small>
          <p className="py-2">{course.description}</p>
          <Link className="text-blue-500 underline" href={course.link}>
            Go to course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
