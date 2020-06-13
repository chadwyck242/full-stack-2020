import React from "react";

const Search = () => {
  return (
    <div>
      <label htmlFor="search" className={"label"}>
        Find countries:{" "}
      </label>
      <input type="text" id="search" className={"search"} />
    </div>
  );
};

export default Search;
