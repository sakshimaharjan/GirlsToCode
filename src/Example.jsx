import React, { useState } from 'react';

const Example = () => {
  const data = [
    { category: "Fruits", price: "$1", stocked: "yes", name: "Apple" },
    { category: "Fruits", price: "$1", stocked: "yes", name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: "no", name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: "yes", name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: "no", name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: "yes", name: "Peas" }
  ];

  const [showButton, setShowButton] = useState(true);
  const [displayData, setDisplayData] = useState(false);

  const handleButtonClick = () => {
    setShowButton(false);
    setDisplayData(true);
  };

  return (
    <div>
      {displayData && (
      <table border={1} cellpadding="10" cellSpacing={10}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stocked</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.stocked}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
      {showButton && <button onClick={handleButtonClick}>Display Data</button>}
    </div>
  );
};

export default Example;
