import React from "react";

const Search = ({ filterNames }) => {
  return (
    <div className="search">
      Filter displayed persons:{" "}
      <input placeholder="Filter by name" onChange={filterNames} />
    </div>
  );
};

export default Search;
