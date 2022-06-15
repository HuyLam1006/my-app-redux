import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  descrement,
  increment,
  incrementbyvalue,
} from '../redux-toolkit/counterSlice';
// import { descrement, increment, incrementbyvalue } from '../redux/counter';

const Counter = () => {
  // const [count, setCount] = useState(0);

  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDescrement = () => {
    dispatch(descrement());
  };
  const handleIncrementByValue = () => {
    dispatch(incrementbyvalue({ value: 10 }));
  };

  //! truyen props
  // const { count, setCount } = props;

  // const increament = () => {
  //   setCount(count + 1);
  // };
  // const descreament = () => {
  //   setCount(count - 1);
  // };

  return (
    <div className="flex flex-col items-center p-5 bg-white shadow w-[400px] mx-auto mt-10">
      <h2 className="mb-5">Count: {count}</h2>
      <div className="flex justify-center items-center gap-x-5">
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleIncrement}
        >
          Increament
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleDescrement}
        >
          Descreament
        </button>
        <button
          className="inline-block p-2 border border-gray-200"
          onClick={handleIncrementByValue}
        >
          Increament by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
