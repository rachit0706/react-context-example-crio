import React from "react";

const Counter = ({ diff = 1, count = 0, setCount }) => {
  const increaseCount = () => {
    setCount(count + diff);
  };

  const decreaseCount = () => {
    setCount(count - diff);
  };

  const resetCounter = () => {
    setCount(0);
  };

  /**
   * This Counter Component "consumes" the count state
   * "provided" by the Dashboard Component
   */
  return (
    <div>
      <h1 className="counter-display">{count}</h1>
      <div>
        <button onClick={increaseCount}> +{diff} </button>
        <button onClick={decreaseCount}> -{diff} </button>
        <button onClick={resetCounter}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
