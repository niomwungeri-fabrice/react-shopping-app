import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-danger btn-sm m-2"
        >
          Reset
        </button>
        {this.props.items.map(item => (
          <Counter
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            key={item.id}
            value={item}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
