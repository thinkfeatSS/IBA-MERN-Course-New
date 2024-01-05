import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  orderedIcecream,
  restoreIcecream,
} from "../features/icecream/IcecreamSlice";
function IcecreamView() {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div>No: of Icecreams : {numOfIcecream}</div>
      <button
        onClick={() => {
          dispatch(orderedIcecream(value));
        }}
      >
        Order Icecream
      </button>
      <button
        onClick={() => {
          dispatch(restoreIcecream());
        }}
      >
        Return Icecream
      </button>
    </>
  );
}

export default IcecreamView;
