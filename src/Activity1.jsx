import React, {useState} from "react";

const Activity1= () => {
    const[count, setCount] = useState(0)
    const [buttonClicked, setButtonClicked] = useState(false);

  const increase = () => {
    setCount(count + 1);
    setButtonClicked(true);

  };

  const decrease = () => {
    setCount(count - 2);
    setButtonClicked(true);

  };

  return(
    <div>
        <h1>Welcome to ReactJS Workshop</h1>
        <h1>Count: {count} </h1>

        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>

      {buttonClicked? <p>Yay you did it!</p>:<p></p>}
    </div>
  )
}
export default Activity1;