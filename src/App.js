import React from "react";

/**
 * Class Component の例
 */
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="huga"></label>
//         <input type="text" onChange={() => {console.log('text changed')}}/>
//       </React.Fragment>
//     );
//   }
// }

/**
 * Functional Component の例
 */
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>Meow!</div>;
};

export default App;
