
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  return (
    <>
      <h2>Cart List {state.count} </h2>
      {state.items.map((item) => (
        <div key={item.id}>
          {item.title} - {item.qty}- {item.id}
          <br />
          <button
            onClick={() => dispatch({ type: "REMOVE_CART", payload: item })}
          >
            Remove Cart
          </button>
          <br />
        </div>
      ))}
    </>
  );
}

export { Cart as default };