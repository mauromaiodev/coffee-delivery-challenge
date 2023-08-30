import { ReactNode, useReducer } from "react";
import { createContext } from "use-context-selector";
import { CoffeesPropsType } from "../components/Coffee/components/AllCoffees";
import { CartDetailsReducer } from "../reducers/reducer";
import {
  AddCoffeeOnCartAction,
  ClearCartAction,
  DecrementCoffeeOnCartAction,
  RemoveCoffeeOnCartAction,
} from "../reducers/actions";

export interface CoffeesDetails {
  id: number;
  img: string;
  type: string[];
  title: string;
  paragraph: string;
  price: number;
  quantity: number;
}

interface CoffeeContextType {
  coffeCart: CoffeesDetails[];
  addCoffeeToCart: (coffeeProps: CoffeesDetails) => void;
  decrementItemOnCart: (id: number) => void;
  handleRemoveItemsOnCart: (id: number) => void;
  clearCart: () => void;
}

interface CoffeeProviderProps {
  children: ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [coffeCart, dispatch] = useReducer(CartDetailsReducer, []);

  function addCoffeeToCart(coffeeProps: CoffeesPropsType) {
    return dispatch(AddCoffeeOnCartAction(coffeeProps));
  }

  function decrementItemOnCart(id: number) {
    return dispatch(DecrementCoffeeOnCartAction(id));
  }
  function handleRemoveItemsOnCart(id: number) {
    return dispatch(RemoveCoffeeOnCartAction(id));
  }

  function clearCart() {
    dispatch(ClearCartAction());
  }

  return (
    <CoffeeContext.Provider
      value={{
        decrementItemOnCart,
        addCoffeeToCart,
        coffeCart,
        handleRemoveItemsOnCart,
        clearCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
