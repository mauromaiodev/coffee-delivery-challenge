import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import {
  CoffeeContent,
  CoffeeType,
  ContentPrice,
  Price,
  ContentAmount,
  AmountCart,
  Cart,
} from "./styles";
import { useEffect, useState } from "react";
import { useContext } from "use-context-selector";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";

export interface CoffeesPropsType {
  id: number;
  img: string;
  type: string[];
  title: string;
  paragraph: string;
  price: number;
  quantity: number;
}

interface AllCoffeesProps {
  coffeeProps: CoffeesPropsType;
}

export function AllCoffees({ coffeeProps }: AllCoffeesProps) {
  const { img, paragraph, price, title, type, id } = coffeeProps;
  const formattedPrice = price.toFixed(2).replace(".", ",");
  const [quantity, setQuantity] = useState(0);
  const { addCoffeeToCart, coffeCart, decrementItemOnCart } =
    useContext(CoffeeContext);

  // Para exibir em tela
  useEffect(() => {
    const currentyCoffee = coffeCart.find((coffee) => coffee.id === id);
    setQuantity(currentyCoffee ? currentyCoffee.quantity : 0);
  }, [addCoffeeToCart, id, coffeCart]);
  return (
    <CoffeeContent>
      <img src={img} alt="" />

      <div className="row">
        {type.map((tag) => (
          <div key={tag} className="tags">
            <CoffeeType>{tag} </CoffeeType>
          </div>
        ))}
      </div>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <ContentPrice>
        <Price>
          <span>
            R$ <strong>{formattedPrice}</strong>
          </span>
        </Price>
        <ContentAmount>
          <AmountCart>
            <div className="minus">
              <Minus
                color="#8047F8"
                size={14}
                weight="bold"
                onClick={() => decrementItemOnCart(id)}
              />
            </div>
            {quantity}
            <span className="plus">
              <Plus
                color="#8047F8"
                size={14}
                weight="bold"
                onClick={() => addCoffeeToCart(coffeeProps)}
              />
            </span>
          </AmountCart>
          <Cart>
            <Link to="/checkout">
              <ShoppingCart color="white" weight="fill" size={20} />
            </Link>
          </Cart>
        </ContentAmount>
      </ContentPrice>
    </CoffeeContent>
  );
}
