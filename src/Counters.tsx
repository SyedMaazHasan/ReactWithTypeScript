import React, { Component } from "react";
import Counter from "./counter";

interface stateTypeCheck {
  counters: { count: number; id: number }[];
  name: string;
}

//this class is having no props
class Counters extends Component<{}, stateTypeCheck> {
  state = {
    counters: [
      { count: 0, id: 1 },
      { count: 1, id: 2 }
    ],
    name: ""
  };
  //see how we pass the parameters in function
  addHandler = (id: number): void => {
    let temporary = this.state.counters;
    let temp = this.state.counters.findIndex(n => n.id === id);
    temporary[temp].count += 1;

    this.setState({ counters: temporary });
  };
  //see how we provide the type of event listeners
  clicked = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Enter your name</label>
            <input id="name" onChange={this.clicked} />
          </div>

          <button type="submit">Submit</button>
        </form>
        {this.state.counters.map(m => (
          <Counter values={m.count} addHandler={() => this.addHandler(m.id)} />
        ))}
      </div>
    );
  }
}

export default Counters;
