import { useEffect } from 'react';
import { useState } from 'react';
import reviews from './data';
import Person from './Person';

const App = () => {
  const [index, setIndex] = useState(0);
  const person = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((currIndex) => {
      const newIndex = currIndex + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((currIndex) => {
      const newIndex = currIndex - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber += 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <main>
      <Person
        {...person}
        prevPerson={prevPerson}
        nextPerson={nextPerson}
        randomPerson={randomPerson}
      />
    </main>
  );
};
export default App;
