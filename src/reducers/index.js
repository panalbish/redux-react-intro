export const ADD_ITEM = 'basket/ADD_ITEM';

export const addToBasket = itemId => ({
  type: ADD_ITEM,
  payload: {
    itemId
  }
});
const DEFAULT_STATE = {
  basket: []
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        basket: [...state.basket, payload.itemId]
      };
    default:
      return state;
  }
};

export default rootReducer;
