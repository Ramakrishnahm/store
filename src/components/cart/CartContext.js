
import { createContext, useReducer } from "react";

const CartContext = createContext();
CartContext.displayName = "CartContext";

const initialState = { items: [], totalCount: 0 };

function cartReducer(state, payload) {
  const { type, value } = payload;
  console.log(payload)
  switch (type) {
    case "ADD_ITEM_CART":
      return {
        ...state,
        items: [...state.items, value],
        totalCount: state.totalCount + +value.qty,
      };
    case "REMOVE_ITEM_CART": {
      let itemFound;
      return {
        ...state,
        items: state.items.filter((item) => {
          if (item.id === value.id) {
            itemFound = item;
            return false;
          }
          return true;
        }),
        totalCount: state.totalCount - itemFound.qty
      };
    }
    case "UPDATE_ITEM_CART": {
      
      let prevItemState;
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id == value.id) {
            prevItemState = item;
            return { ...item, count: value.qty };
          }
          return item;
        }),
        totalCount: state.totalCount + +value.count - prevItemState.qty,
      };
    }
    case "CLEAR_CART":
      return initialState;
    default:
      return state;
  }
}

const CartContextProvider = (props) => {
  
  const [state, dispatch] = useReducer(cartReducer, initialState);



  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider }