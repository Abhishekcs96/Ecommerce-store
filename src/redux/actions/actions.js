import { Actiontypes } from "../constants/action-types";

// Actions always returns a plain js object which has a key of type and another key of payload
// the key type will be the type of the action you want to perform
// the key payload is basically data that is to be processed for the action performed.
export const Setproducts = (products) => {
  return {
    type: Actiontypes.SET_PRODUCTS,
    payload: products,
  };
};

export const SelectedProducts = (products) => {
  return {
    type: Actiontypes.SELECTED_PRODUCTS,
    payload: products,
  };
};


