const redux = require("redux");

const CAKE_ORDER = "CAKE_ORDER";
const CAKE_REVERT = "CAKE_REVERT";

// create store
const createStore = redux.createStore;

const initialState = {
  numOfCakes: 10,
};
// action
action = {
  type: CAKE_ORDER,
  quantity: 1,
};

revertCake = {
  type: CAKE_REVERT,
  quantity: 1,
};
// Reducer
// action or intial state
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDER:
      return {
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_REVERT:
      return {
        numOfCakes: state.numOfCakes + 1,
      };
    default:
      return state;
  }
};
// creating store
const store = createStore(reducer);
console.log("intial state", store.getState());
const unSubscribe = store.subscribe(() => {
  console.log("state", store.getState());
});

store.dispatch(action);
store.dispatch(action);
store.dispatch(revertCake);
store.dispatch(revertCake);

unSubscribe();
