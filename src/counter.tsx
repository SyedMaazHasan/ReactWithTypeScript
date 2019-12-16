import React, { Component } from "react";

class Counters extends Component<{
  values: number;
  addHandler: () => void;
}> {
  render() {
    return (
      <div>
        value={this.props.values}
        <button onClick={this.props.addHandler}>add</button>
      </div>
    );
  }
}

export default Counters;
