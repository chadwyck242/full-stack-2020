import React, { useState } from "react";
import ReactDOM from "react-dom";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const zeroArray = new Array(6).fill(0);
let votesArray = [...zeroArray];

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(0);

  const getRandomSelection = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
    setVotes(votesArray[randomNumber]);
  };

  const setSelectedVotes = () => {
    console.log(votesArray);
    let voteIndex = anecdotes.indexOf(anecdotes[selected]);
    console.log(voteIndex);
    votesArray[voteIndex] += 1;
    console.log(votesArray);
    setVotes(votesArray[voteIndex]);
  };

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes} votes</p>
      <button onClick={() => setSelectedVotes()}>vote</button>
      <button onClick={() => getRandomSelection()}>next anecdote</button>
    </div>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
