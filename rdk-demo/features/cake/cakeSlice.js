// Action
// Reducer
// ---------------
// Slice
const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
    numOfCakes : 20
}
const cakeSlice = createSlice({name: "cake",initialState, reducers:{
    orderCake : (state) =>{
        // state.numOfCakes = state.numOfCakes - 3
        state.numOfCakes--
    },
    returnCake : (state) => {
        state.numOfCakes++
    }
}});


module.exports = cakeSlice.reducer
module.exports.actions = cakeSlice.actions
// console.log(cakeSlice)
// Store