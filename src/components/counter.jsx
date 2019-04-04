import React, { Component } from "react";
class Counter extends Component {
  state = {
    counter: this.props.value.price
  };

  getClassBadge = counter => {
    return counter === 0 ? "warning" : "primary";
  };

  render() {
    const { price } = this.props.value;
    return (
      <div>
        <span className={`badge badge-${this.getClassBadge(price)} m-2`}>
          {price}
        </span>
        <button
          onClick={() => this.props.onDecrement(this.props.value)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <button
          onClick={() => this.props.onIncrement(this.props.value)}
          className="btn btn-success btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.value.id)}
          className="btn btn-danger btn-sm m-2"
        >
          x
        </button>
      </div>
    );
  }
}

export default Counter;
