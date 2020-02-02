import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="huga"></label>
        <input type="text" onChange={() => {console.log('text changed')}}/>
      </React.Fragment>
    );
  }
}

export default App;
