import React, { useState } from "react";
import PropTypes from "prop-types";

const UseStateWithObject = () => {
  const [name, setName] = useState({ firstName: "", lastName: "", age: "" });
  return (
    <form>
      <input
        type={"text"} 
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type={"text"}
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <input
        type={"number"}
        value={name.age}
        onChange={(e) => setName({ ...name, age: e.target.value })}
      />
      
      <h2>Your first name is: {name.firstName}</h2>

      <h2>Your last name is: {name.lastName}</h2>
      
      <h2>Your age is: {name.age}</h2>

    </form>
  );
};

UseStateWithObject.propTypes = {};

export default UseStateWithObject;
