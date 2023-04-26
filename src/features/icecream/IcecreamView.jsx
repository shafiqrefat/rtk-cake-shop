import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered_icecream, restocked_icecream } from "./icecreamSlice";

const IcecreamView = () => {
  const [value, setValue] = useState(1);
  const { numberOfIcecream } = useSelector((state) => state.icecream);
  const dispatch = useDispatch();
  return (
    <div className="border border-slate-500 rounded-md p-3">
      <h2>Number of Icecream :{numberOfIcecream}</h2>
      <button
        onClick={() => dispatch(ordered_icecream())}
        className="border border-slate-300 py-2 px-5 rounded-lg"
      >
        Order Icecream
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        className="border border-lime-400 mx-2 py-2 px-3 rounded text-center"
        placeholder="how many re-stocked"
      />
      <button
        onClick={() => dispatch(restocked_icecream(value))}
        className="border border-slate-300 py-2 px-5 rounded-lg"
      >
        Custom Re-stocked
      </button>
    </div>
  );
};

export default IcecreamView;
