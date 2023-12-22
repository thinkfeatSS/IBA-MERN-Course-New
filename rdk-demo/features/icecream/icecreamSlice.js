// Action
// Reducer
// ---------------
// Slice
const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
    numOfIcecreams : 20
}
const icecreamSlice = createSlice({name: "cake",initialState, reducers:{
    orderIcecream : (state) =>{
        // state.numOfCakes = state.numOfCakes - 3
        state.numOfIcecreams--
    },
    returnIcecream : (state) => {
        state.numOfIcecreams++
    }
}});


module.exports = icecreamSlice.reducer
module.exports.actions = icecreamSlice.actions
// console.log(cakeSlice)
// Store