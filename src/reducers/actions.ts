import { CoffeesDetails } from "../contexts/CoffeeContext";

enum ActionTypes {
  ADD_COFFEE_ON_CART = "ADD_COFFEE_ON_CART",
  DECREMENT_ITEM_ON_CART = "DECREMENT_ITEM_ON_CART",
  REMOVE_ITEM_ON_CART = "REMOVE_ITEM_ON_CART",
  CLEAR_CART = "CLEAR_CART",
}
export function AddCoffeeOnCartAction(coffeeProps: CoffeesDetails) {
  return {
    type: ActionTypes.ADD_COFFEE_ON_CART,
    payload: { coffeeProps },
  };
}
export function DecrementCoffeeOnCartAction(id: number) {
  return {
    type: ActionTypes.DECREMENT_ITEM_ON_CART,
    payload: { id },
  };
}
export function RemoveCoffeeOnCartAction(id: number) {
  return {
    type: ActionTypes.REMOVE_ITEM_ON_CART,
    payload: { id },
  };
}
export function ClearCartAction() {
  return {
    type: ActionTypes.CLEAR_CART,
    payload: {},
  };
}
