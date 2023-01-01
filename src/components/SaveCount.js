import React from "react";

const SaveCount = ({ count = 0, countHistory = [], setCountHistory }) => {
  const saveHistory = () => {
    /**
     * This SaveCount Component "consumes" the countHistory array
     * "provided" by the Dashboard Component
     */
    setCountHistory([
      {
        value: count,
        time: new Date().toLocaleTimeString()
      },
      ...countHistory
    ]);
  };

  return (
    <button id="save-btn" onClick={saveHistory}>
      Save Total Count
    </button>
  );
};

// ~~ With Context ~~

// import React, { useContext } from "react";
// import { CountContext } from "./Dashboard";

// const SaveCount = ({ count = 0 }) => {
//   const { countHistory, setCountHistory } = useContext(CountContext);

//   const saveHistory = () => {
//     setCountHistory([
//       {
//         value: count,
//         time: new Date().toLocaleTimeString()
//       },
//       ...countHistory
//     ]);
//   };

//   return (
//     <button id="save-btn" onClick={saveHistory}>
//       Save Total Count
//     </button>
//   );
// };

export default SaveCount;
