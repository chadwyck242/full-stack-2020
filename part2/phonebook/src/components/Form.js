import React from "react";

const Form = (props) => {
  const {
    addPerson,
    newName,
    handleNameChange,
    newNumber,
    handleNumberChange,
  } = props;
  
  return (
    <div>
      <form onSubmit={addPerson}>
        <div className="input">
          name:{" "}
          <input
            value={newName}
            onChange={handleNameChange}
            placeholder="Enter full name"
          />
          number:{" "}
          <input
            value={newNumber}
            onChange={handleNumberChange}
            placeholder="Enter phone number"
          />
        </div>
        <div>
          <button type="submit" className="submit">
            add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
