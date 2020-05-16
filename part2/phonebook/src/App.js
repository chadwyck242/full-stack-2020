import React, { useState } from "react";
import Person from "./components/Person";

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: "",
    };

    const nameFound = persons.some(
      (person) => personObject.name === person.name
    );

    console.log(nameFound);
    if (!nameFound) {
      setPersons(persons.concat(personObject));
      setNewName("");
    } else {
      let alertString = `${personObject.name} is already added to phonebook`;
      alert(alertString);
      setNewName("");
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;