import React, { Component } from "react";

/**
 * 親から子へ値を渡すpropは変更不可なイミュータブルな値であるが、
 * このブランチで勉強するstateはコンポーネント内でしか利用できず、かつ変更可能なミュータブルな値。
 *
 */

const App = () => <Counter />;

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(this.state);
    this.state = {
      count: 0
    };
  }

  handlePlusButton = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleMinusButton = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
