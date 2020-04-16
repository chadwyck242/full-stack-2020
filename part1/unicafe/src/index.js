import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = ({ good, neutral, bad, total }) => {
  if (good == 0 && neutral == 0 && bad == 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {(good * 1 + neutral * 0 + bad * -1) / total}</p>
      <p>positive {(good / total) * 100} %</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));