import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './components/Counter';

function App() {
  const { count } = useSelector((state) => state.counter);

  //! truyen props
  // const [count, setCount] = useState(0);

  return (
    <div>
      <h2>The count from App is: {count}</h2>
      <Counter></Counter>

      {/* truyen props */}
      {/* <Counter count={count} setCount={setCount}></Counter> */}
    </div>
  );
}

export default App;
