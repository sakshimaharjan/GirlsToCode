import React, { useState } from "react";

const Items = () => {
  const [name, setName] = useState("");
  const [fruits, setFruits] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFruits([...fruits, name]);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Input text</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add</button>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

    </form>
  );
};

export default Items;
