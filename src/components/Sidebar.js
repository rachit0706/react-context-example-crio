import React from "react";
import CountHistory from "./History";

const Sidebar = ({ totalCount = 0, history = [] }) => {
  /* This Sidebar component does not use the history state
   * But it passes it on to the CountHistory Component
   * Where this state is "consumed"
   */
  return (
    <div className="sidebar">
      <h2>Total = {totalCount}</h2>
      <CountHistory countHistory={history} />
    </div>
  );
};

// ~~ With Context ~~

// import React from "react";
// import CountHistory from "./History";

// const Sidebar = ({ totalCount = 0 }) => {
//   return (
//     <div className="sidebar">
//       <h2>Total = {totalCount}</h2>
//       <CountHistory />
//     </div>
//   );
// };

export default Sidebar;
