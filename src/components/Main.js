import React from "react";
import Counter from "./Counter";
import SaveCount from "./SaveCount";

const Main = ({
  count1,
  count2,
  setCount1,
  setCount2,
  countHistory,
  setCountHistory
}) => {
  /**
   * This Main component also does not use any state
   * But again passes it forward for Counter & SaveCount component
   */
  return (
    <div className="main">
      <Counter diff={2} count={count1} setCount={setCount1} />
      <Counter diff={3} count={count2} setCount={setCount2} />
      <SaveCount
        count={count1 + count2}
        countHistory={countHistory}
        setCountHistory={setCountHistory}
      />
    </div>
  );
};

// ~~ With Context ~~

// import React, { useContext } from "react";
// import Counter from "./Counter";
// import { CountContext } from "./Dashboard";
// import SaveCount from "./SaveCount";

// const Main = () => {
//   const { count1, setCount1, count2, setCount2 } = useContext(CountContext);

//   return (
//     <div className="main">
//       <Counter diff={2} count={count1} setCount={setCount1} />
//       <Counter diff={3} count={count2} setCount={setCount2} />
//       <SaveCount count={count1 + count2} />
//     </div>
//   );
// };

export default Main;
