import logo from "../../assets/icons/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Outlet, Link } from "react-router-dom";
import {
  HeaderContainer,
  HeaderContent,
  HeaderLocation,
  HeaderCart,
} from "./styles";
import { useContext } from "use-context-selector";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { AddressContext } from "../../contexts/AddressContext";

export function Header() {
  const { coffeCart } = useContext(CoffeeContext);
  const { address } = useContext(AddressContext);

  const totalOnCart = coffeCart.reduce(
    (total, coffee) => total + coffee.quantity,
    0,
  );
  return (
    <div>
      <HeaderContainer>
        <Link to="/">
          <img src={logo} alt="Logo café" />
        </Link>
        <HeaderContent>
          <HeaderLocation>
            <MapPin color="#8047F8" size={20} weight="fill" />
            {address ? `${address.localidade}, ${address.uf}` : "Salvador, BA"}
          </HeaderLocation>
          <HeaderCart>
            <Link to="/checkout">
              {totalOnCart > 0 && ( // Verifica se há itens no carrinho antes de exibir o badge
                <span className="cart-badge">{totalOnCart}</span>
              )}
              <ShoppingCart color="#C47F17" size={20} weight="fill" />
            </Link>
          </HeaderCart>
        </HeaderContent>
      </HeaderContainer>
      <Outlet />
    </div>
  );
}
