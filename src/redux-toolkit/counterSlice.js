import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => ({
      ...state,
      count: state.count + 1,
    }),
    descrement: (state) => ({
      ...state,
      count: state.count - 1,
    }),
    incrementbyvalue: (state, { payload }) => ({
      ...state,
      count: state.count + payload.value,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { increment, descrement, incrementbyvalue } = counterSlice.actions;

export default counterSlice.reducer;
