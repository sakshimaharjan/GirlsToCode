import React, { useState, useEffect } from 'react';

const GuessNum = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [randomNumber] = useState(Math.floor(Math.random() * 20) + 1);

  useEffect(() => {
    if (guess !== '') {
      if (guess < randomNumber) {
        setMessage('Too low! Try again.');
      } else if (guess > randomNumber) {
        setMessage('Too high! Try again.');
      } else {
        setMessage('Yayy, you got it right!');
      }
    }
  }, [guess, randomNumber]);

  const handleChange = (event) => {
    setGuess(event.target.value);
  };

  return (
    <div>
        <h1>Number Guessing Game</h1>
        <p>Guess the number between 1 to 20</p>
      <input type="number" value={guess} onChange={handleChange} />
      <p>{message}</p>
    </div>
  );
};

export default GuessNum;