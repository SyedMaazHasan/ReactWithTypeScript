import React, { Component } from "react";

interface propTypeCheck {
  values: number;
  addHandler: () => void; //see how we passed the return type of function
}

//functional component with typescript
const Counters: React.FC<propTypeCheck> = props => {
  return (
    <div>
      value={props.values}
      <button onClick={props.addHandler}>add</button>
    </div>
  );
};

export default Counters;
