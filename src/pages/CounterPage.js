import produce from "immer";
import { useState, useReducer } from "react";

import Button from "../components/Button";
import Panel from "../components/Panel";
const INCREMENT = "increment-count";
const DECREMENT = "decrement-count";
const CHANGE_VALUE = "change-value";
const SUBMIT = "submit";
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      // return {
      //   ...state,
      //   count: state.count + 1,
      // };
      state.count = state.count + 1;
      return;
    case DECREMENT:
      // return {
      //   ...state,
      //   count: state.count - 1,
      // };
      state.count = state.count - 1;
      return;
    case CHANGE_VALUE:
      // return {
      //   ...state,
      //   valueToAdd: action.payload,
      // };
      state.valueToAdd = action.payload;
      return;
    case SUBMIT:
      // return {
      //   ...state,
      //   count: state.count + state.valueToAdd,
      //   valueToAdd: 0,
      // };
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
  }
};
function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT,
    });
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT,
    });
  };
  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: CHANGE_VALUE,
      payload: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: SUBMIT,
    });
  };
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
