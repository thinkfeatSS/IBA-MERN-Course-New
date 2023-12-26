import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {ordered,restoreCake} from "../features/cake/cakeSlice"
const CakeView = () => {
    // get state
const numOfCakes = useSelector(state=> state.cake.numOfCakes)
// 
const disaptch = useDispatch()
  return (
    <>
      <div>Number Cakes - {numOfCakes}</div>
      <button onClick={()=>{disaptch(ordered())}}>Order Cake</button>
      <button onClick={()=>{disaptch(restoreCake())}}>Return Cake</button>
    </>
  );
};

export default CakeView;
