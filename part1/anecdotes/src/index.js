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
  const [score, setScore] = useState(0);

  const getRandomSelection = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
    setVotes(votesArray[randomNumber]);
  };

  const setSelectedVotes = () => {
    let voteIndex = anecdotes.indexOf(anecdotes[selected]);
    votesArray[voteIndex] += 1;
    setVotes(votesArray[voteIndex]);
    getTopScore();
  };

  const getTopScore = () => {
    let highScore = Math.max(...votesArray);
    console.log(highScore);
    setScore(highScore);
  };

  const topIndex = votesArray.indexOf(score);
  console.log(topIndex);
  console.log(votesArray);

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{props.anecdotes[selected]}</p>
        <p>has {votes} votes</p>
        <button onClick={() => setSelectedVotes()}>vote</button>
        <button onClick={() => getRandomSelection()}>next anecdote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{props.anecdotes[topIndex]}</p>
        <p>has {score} votes</p>
      </div>
    </div>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
