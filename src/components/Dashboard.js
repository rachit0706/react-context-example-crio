import React, { useState } from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  //Here we are maintaining the three states
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [countHistory, setCountHistory] = useState([]);

  //These states will be passed to the child components
  return (
    <div className="dashboard">
      <Sidebar totalCount={count1 + count2} history={countHistory} />
      <Main
        count1={count1}
        count2={count2}
        setCount1={setCount1}
        setCount2={setCount2}
        countHistory={countHistory}
        setCountHistory={setCountHistory}
      />
    </div>
  );
};

// ~~~ With Context ~~~
// import React, { createContext, useState } from "react";
// import Main from "./Main";
// import Sidebar from "./Sidebar";

// export const CountContext = createContext();

// const Dashboard = () => {
//   //Here we are maintaining the three states
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [countHistory, setCountHistory] = useState([]);

//   return (
//     <CountContext.Provider
//       value={{
//         count1,
//         count2,
//         countHistory,
//         setCount1,
//         setCount2,
//         setCountHistory
//       }}
//     >
//       <div className="dashboard">
//         <Sidebar totalCount={count1 + count2} />
//         <Main />
//       </div>
//     </CountContext.Provider>
//   );
// };

export default Dashboard;
