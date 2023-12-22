const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").actions
const icecreamActions = require("./features/icecream/icecreamSlice").actions
const unSubscribe = store.subscribe(()=>{console.log("updated",store.getState())})
console.log("initial state",store.getState());
store.dispatch(cakeActions.orderCake());
store.dispatch(cakeActions.orderCake());
store.dispatch(cakeActions.orderCake());
store.dispatch(cakeActions.returnCake());
store.dispatch(icecreamActions.orderIcecream());
store.dispatch(icecreamActions.orderIcecream());
store.dispatch(icecreamActions.orderIcecream());


unSubscribe()