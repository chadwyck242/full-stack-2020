import React, { useState } from "react";
import Person from "./components/Person";
import Search from "./components/Search";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "555-555-5555" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    const nameFound = persons.some(
      (person) => personObject.name === person.name
    );

    console.log(nameFound);
    if (!nameFound) {
      setPersons(persons.concat(personObject));
    } else {
      let alertString = `${personObject.name} is already added to phonebook`;
      alert(alertString);
    }
    setNewName("");
    setNewNumber("");
  };

  const filterNames = (event) => {
    let filteredName = persons.filter((person) => {
      return person.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setPersons(filteredName);
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search filterNames={(e) => filterNames(e)} />
      <h3>Add a New Person</h3>
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
      <h3>Phone Numbers</h3>
      <ul>
        {persons.map((person) => (
          <Person key={person.name} name={person.name} number={person.number} />
        ))}
      </ul>
    </div>
  );
};

export default App;
