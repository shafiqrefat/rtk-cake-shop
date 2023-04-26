import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cake_ordered, cake_restocked } from "./cakeSlice";

const CakeView = () => {
  const { numberOfCake } = useSelector((state) => state.cake);
  const dispatch = useDispatch();
  return (
    <div className="border border-slate-500 rounded-md p-3">
      <h1>Number of cake: {numberOfCake}</h1>
      <button
        onClick={() => dispatch(cake_ordered())}
        className="border border-slate-300 py-2 px-5 rounded-lg me-4"
      >
        Order Cake
      </button>
      <button
        onClick={() => dispatch(cake_restocked(5))}
        className="border border-slate-300 py-2 px-5 rounded-lg"
      >
        Re-stocked (5)
      </button>
    </div>
  );
};

export default CakeView;
