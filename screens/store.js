import { createStore } from 'redux';

const initialState = {
  count: 0,
  totalPrice: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {
        ...state,
        count: state.count + 1,
        totalPrice: calculateTotalPrice(state.count, shoesDetails.price), // Function to calculate price
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;