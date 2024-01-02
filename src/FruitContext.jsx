import React, { useContext } from 'react';

const FruitContext = React.createContext();

const BaseComponent = () => {
    const fruitName="Orange"
  return (
    <FruitContext.Provider value={fruitName}>
      <ChildA />
    </FruitContext.Provider>
  );
}

const ChildA = () => {
  return <ChildB />;
}

const ChildB = () => {
  const fruit = useContext(FruitContext);
  return <p>The fruit is: {fruit}</p>;
}

export default BaseComponent;