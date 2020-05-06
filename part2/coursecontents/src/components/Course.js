import React from "react";

const Header = ({ name }) => {
  return <h2>{name}</h2>;
};

const Total = ({ parts }) => {
  const sum = parts.reduce((allParts, part) => {
    return allParts + part.exercises;
  }, 0);
  return (
    <strong>
      <p>Total of {sum} exercises</p>
    </strong>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <>
          <Header key={course.id} name={course.name} />
          <Content key={course.id} parts={course.parts} />
          <Total key={course.id} parts={course.parts} />
        </>
      ))}
    </div>
  );
};

export default Course;
