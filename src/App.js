import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [counter, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handlePreviousStep() {
    setStep((s) => s - 1);
  }

  function handleNextStep() {
    setStep((s) => s + 1);
  }

  const date = new Date();
  date.setDate(date.getDate() + counter);

  return (
    <>
      <div>
        <button onClick={handlePreviousStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleNextStep}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Counter: {counter}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {counter === 0
            ? "Today is "
            : counter > 0
            ? `${counter} days from today is `
            : `${Math.abs(counter)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
