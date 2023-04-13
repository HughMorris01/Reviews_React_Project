import { useEffect } from 'react';
import { useState } from 'react';
import reviews from './data';
import Person from './Person';

const App = () => {
  const [index, setIndex] = useState(0);
  const person = reviews[index];

  const nextPerson = () => {
    if (index < reviews.length) {
      setIndex((currIndex) => {
        return currIndex + 1;
      });
    } else {
      setIndex(0);
    }
  };

  const prevPerson = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(reviews.length - 1);
    }
  };

  // useEffect();
  return (
    <main>
      <Person {...person} prevPerson={prevPerson} nextPerson={nextPerson} />
    </main>
  );
};
export default App;
