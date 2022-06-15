//! Reducer
const INCREMENT = 'increment'; // dùng để dể sửa và thay đổi
const DESCREMENT = 'descrement';
const INCREMENTBYVALUE = 'incrementbyvalue';

const initialState = {
  count: 0,
};

export const increment = () => ({
  //type: action.type
  type: INCREMENT,
});
export const descrement = () => ({
  type: DESCREMENT,
});
export const incrementbyvalue = (value) => ({
  type: INCREMENTBYVALUE,
  payload: value,
});

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DESCREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREMENTBYVALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      return state;
  }
}

export default counterReducer;
