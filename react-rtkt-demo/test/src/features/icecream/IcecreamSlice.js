import { createSlice } from "@reduxjs/toolkit";
import { ordered } from "../cake/cakeSlice";
const initialState = {
  numOfIcecream: 30,
};

const icecreamSlice = createSlice({
  name: "ice-cream",
  initialState,
  reducers: {
    // state.numOfIcecream = state.numOfIcecream - action.payload
    orderedIcecream: (state, action) => {
      state.numOfIcecream -= action.payload;
    },
    restoreIcecream: (state) => {
      state.numOfIcecream++;
    },
    //     extraReducers: builder => {
    //         builder.addCase(ordered, state=>{
    //             state.numOfIcecream--;
    //         })
    //     }
  },
});

export default icecreamSlice.reducer;
export const { orderedIcecream, restoreIcecream } = icecreamSlice.actions;
