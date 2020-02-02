import React from "react";

const App = () => {
  const propfiles = [
    { name: "Taro", age: 10},
    { name: "Hanako", age: 5},
    { name: "NoName"}
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

User.defaultProps = {
  age: 1
}

export default App;
