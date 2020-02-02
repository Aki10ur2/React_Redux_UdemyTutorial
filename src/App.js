import React from "react";
import Proptypes from "prop-types";

const App = () => {
  const propfiles = [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 5},
  ]
  return (
    <div>
      {
        propfiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  );
};

const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old!</div>;
};

// User.defaultProps = {
//   age: 1
// }

/**
 * component が受け取るpropsの型を定義する方法
 */
User.propTypes = {
  name: Proptypes.string,
  age: Proptypes.number.isRequired
}

export default App;
