import { useEffect, useRef, useState } from 'react';
import { UserMenu } from './UserMenu';
import { Player } from './Player';
import { SignupForm } from './SignupForm';

export const App = () => {
  const [firsVtvalue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const valueRef = useRef(0);

  useEffect(() => {
    console.log(firsVtvalue + secondValue);
  }, [firsVtvalue, secondValue]);

  useEffect(() => {
    console.log(valueRef.current);
  });

  const handleClick = () => {
    valueRef.current += 1;
  };

  return (
    <div>
      <button type="button" onClick={() => setFirstValue(firsVtvalue + 1)}>
        First:{firsVtvalue}
      </button>
      <button type="button" onClick={() => setSecondValue(secondValue + 1)}>
        Second:{secondValue}
      </button>
      <UserMenu />
      <button onClick={handleClick}>Button with ref</button>
      <Player sourse="http://media.w3.org/2010/05/sintel/trailer.mp4" />
      <SignupForm />
    </div>
  );
};
