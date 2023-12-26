import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 30,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
      // state.numOfCakes = state.numOfCakes - 1
    },
    restoreCake: (state) => {
      state.numOfCakes++;
    },
  },
});

export default cakeSlice.reducer
export const {ordered,restoreCake} = cakeSlice.actions

// SLice --- Actions, Reucers
