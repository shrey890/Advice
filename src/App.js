import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(function () {
    getAdvice();
  }, []);
  return (
    <div className="app">
      <h1 className="app2">{advice}</h1>
      <hr />
      <button onClick={getAdvice} className="button-85 ">
        Get Advice
      </button>
      <Message count={count} />
      <hr />
    </div>
  );
}
function Message(props) {
  return (
    <p>
      You Have read <strong style={{ color: "red" }}>{props.count}</strong>{" "}
      pieces of advice
    </p>
  );
}
