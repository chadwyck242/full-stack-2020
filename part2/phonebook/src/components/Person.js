import React from "react";

const Person = ({ name, number }) => {
  return (
    <li>
      <span className="name">{name}</span>
      <span className="number">{number}</span>
    </li>
  );
};

export default Person;
