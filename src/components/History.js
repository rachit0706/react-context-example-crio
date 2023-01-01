import React from "react";
import { uid } from "../App";

const CountHistory = ({ countHistory = [] }) => {
  /**
   * This CountHistory component "consumes"
   * the countHistory array "provided" by the Dashboard
   * and passed from the Sidebar component
   */
  return (
    <div>
      <h3>History</h3>
      <div className="history">
        {countHistory.map((item) => (
          <div key={uid()} style={{ paddingBottom: "0.5rem" }}>
            {item.time} | {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

// ~~~ With Context ~~~
// import React, { useContext } from "react";
// import { uid } from "../App";
// import { CountContext } from "./Dashboard";

// const CountHistory = () => {
//   const { countHistory } = useContext(CountContext);

//   return (
//     <div>
//       <h3>History</h3>
//       <div className="history">
//         {countHistory.map((item) => (
//           <div key={uid()} style={{ paddingBottom: "0.5rem" }}>
//             {item.time} | {item.value}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default CountHistory;
