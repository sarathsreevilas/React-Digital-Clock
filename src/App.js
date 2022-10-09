import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  const [ctime, setCtime] = useState(time);

  setInterval(UpdateTime, 1000);

  return (
    <div className="time">
      <h1> {ctime} </h1>
    </div>
  );
};

export default App;
