import { CoffeesDetails } from "../contexts/CoffeeContext";

enum ActionTypes {
  ADD_COFFEE_ON_CART = "ADD_COFFEE_ON_CART",
  DECREMENT_ITEM_ON_CART = "DECREMENT_ITEM_ON_CART",
  REMOVE_ITEM_ON_CART = "REMOVE_ITEM_ON_CART",
  CLEAR_CART = "CLEAR_CART",
}
interface PayloadTypes {
  id?: number;
  coffeeProps?: CoffeesDetails;
}
interface Action {
  type: ActionTypes;
  payload: PayloadTypes;
}

export function CartDetailsReducer(state: CoffeesDetails[], action: Action) {
  const { payload } = action;

  switch (action.type) {
    case ActionTypes.ADD_COFFEE_ON_CART:
      if (payload.coffeeProps) {
        return addCoffeeToCart(state, payload.coffeeProps);
      }
      return state;

    case ActionTypes.DECREMENT_ITEM_ON_CART:
      if (payload.id) {
        return decrementItemOnCart(state, payload.id);
      }
      return state;

    case ActionTypes.REMOVE_ITEM_ON_CART:
      if (payload.id) {
        return removeItemFromCart(state, payload.id);
      }
      return state;

    case ActionTypes.CLEAR_CART:
      return [];

    default:
      return state;
  }
}

function addCoffeeToCart(state: CoffeesDetails[], coffeeProps: CoffeesDetails) {
  const currentyCoffeeIndex = state.findIndex(
    (coffee) => coffee.id === coffeeProps.id,
  );

  if (currentyCoffeeIndex >= 0) {
    return state.map((coffee, index) =>
      index === currentyCoffeeIndex
        ? { ...coffeeProps, quantity: coffee.quantity + 1 }
        : coffee,
    );
  } else {
    return [...state, { ...coffeeProps, quantity: 1 }];
  }
}

function decrementItemOnCart(state: CoffeesDetails[], id: number) {
  if (!id) {
    return state;
  }

  const currentyCoffeeIndex = state.findIndex((coffee) => coffee.id === id);

  if (currentyCoffeeIndex >= 0) {
    return state
      .map((coffee, index) =>
        index === currentyCoffeeIndex
          ? { ...coffee, quantity: coffee.quantity - 1 }
          : coffee,
      )
      .filter((coffee) => coffee.quantity > 0);
  }

  return state;
}

function removeItemFromCart(state: CoffeesDetails[], id: number) {
  if (!id) {
    return state;
  }

  const currentyCoffeeIndex = state.findIndex((coffee) => coffee.id === id);

  if (currentyCoffeeIndex >= 0) {
    return state.filter((_, index) => index !== currentyCoffeeIndex);
  }

  return state;
}
