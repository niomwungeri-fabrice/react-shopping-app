import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters.jsx";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    items: [
      { id: 1, price: 4 },
      { id: 2, price: 0 },
      { id: 3, price: 0 },
      { id: 4, price: 0 }
    ]
  };
  handleDelete = counterId => {
    const filteredItems = this.state.items.filter(
      item => item.id !== counterId
    );
    this.setState({ items: filteredItems });
  };
  handleReset = () => {
    const items = this.state.items.map(item => {
      item.price = 0;
      return item;
    });
    this.setState({ items });
  };
  handleIncrement = value => {
    const items = [...this.state.items];
    const index = items.indexOf(value);
    items[index].price += 1;
    this.setState({ items });
  };
  handleDecrement = value => {
    const items = [...this.state.items];
    const index = items.indexOf(value);
    if (items[index].price !== 0) {
      items[index].price -= 1;
    }
    this.setState({ items });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar total={this.state.items.filter(item=>item.price>0).length} />
        <div className="container">
          <Counters
            items={this.state.items}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
