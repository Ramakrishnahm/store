import { useReducer } from "react";
// import { useEffect } from "react"
// import { NavLink } from "react-router-dom"

const initialState = 0;

const counterReducer = (state, payload) => {
  const { action, value } = payload;
  switch (action) {
    case "addtocart":
      return state + value;
    case "removefromcart":
      return state - value;

    case "reset":
      return initialState;

    default:
      return state;
  }
};

function AddValue() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      {state}

      <button onClick={() => dispatch({ action: "removefromcart", value: 1 })}>
        remove
      </button>
      <button onClick={() => dispatch({ action: "reset" })}>reset</button>
    </>
  );
}

function Cart() {
  return (
    <>
      <AddValue />
    </>
  );
}

export default Cart;
