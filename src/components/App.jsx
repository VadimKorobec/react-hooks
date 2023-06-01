import { useEffect, useState } from 'react';
import { UserMenu } from './UserMenu';

export const App = () => {
  const [firsVtvalue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log(firsVtvalue + secondValue);
  }, [firsVtvalue, secondValue]);

  return (
    <div>
      <button type="button" onClick={() => setFirstValue(firsVtvalue + 1)}>
        First:{firsVtvalue}
      </button>
      <button type="button" onClick={() => setSecondValue(secondValue + 1)}>
        Second:{secondValue}
      </button>
      <UserMenu />
    </div>
  );
};
