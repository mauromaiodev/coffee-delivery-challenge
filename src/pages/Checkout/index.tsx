import { Minus, Plus, Trash } from "phosphor-react";
import {
  BtnSucess,
  ButtonAmount,
  ButtonTrash,
  CheckoutContainer,
  CoffeeAmount,
  CoffeeChosen,
  CoffeeContainer,
  CoffeeContent,
  CoffeeDescription,
  ContainerTotalPayment,
  Hr,
  Total,
  TotalContent,
  BtnContainerConfirm,
} from "./styles";
import { Address } from "../../components/Address";
import { useContext } from "use-context-selector";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { Link } from "react-router-dom";
import { AddressContext } from "../../contexts/AddressContext";

export function Checkout() {
  const { address } = useContext(AddressContext);
  const {
    addCoffeeToCart,
    coffeCart,
    decrementItemOnCart,
    handleRemoveItemsOnCart,
    clearCart,
  } = useContext(CoffeeContext);
  const delivery = 18.9;

  const totalItemsOnCart = coffeCart.reduce((acc, current) => {
    return acc + current.price * current.quantity;
  }, 0);

  const totalWithDelivery = totalItemsOnCart + delivery;

  function formatValueBRL(value: number) {
    return value.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  }
  const isButtonEnabled = coffeCart.length > 0 && address && address.logradouro;

  return (
    <CheckoutContainer>
      <Address />
      <CoffeeContainer>
        <h2>Cafés selecionados</h2>
        <CoffeeChosen>
          {coffeCart.map((coffee) => (
            <CoffeeContent key={coffee.id}>
              <img src={coffee.img} alt="" />
              <CoffeeDescription>
                <p>{coffee.title}</p>
                <CoffeeAmount>
                  <ButtonAmount>
                    <Minus
                      color="#8047F8"
                      size={14}
                      weight="bold"
                      onClick={() => decrementItemOnCart(coffee.id)}
                    />
                    {coffee.quantity}
                    <Plus
                      color="#8047F8"
                      size={14}
                      weight="bold"
                      onClick={() => addCoffeeToCart(coffee)}
                    />
                  </ButtonAmount>
                  <ButtonTrash
                    onClick={() => handleRemoveItemsOnCart(coffee.id)}
                  >
                    <Trash size={16} color="#8047F8" />
                    remover
                  </ButtonTrash>
                </CoffeeAmount>
              </CoffeeDescription>
              <span>R$ {coffee.price.toFixed(2).replace(".", ",")}</span>
            </CoffeeContent>
          ))}

          <Hr />
          <ContainerTotalPayment>
            <TotalContent>
              <span>Total de itens </span>
              <span>R$ {formatValueBRL(totalItemsOnCart)}</span>
            </TotalContent>

            <TotalContent>
              <span>Entrega</span>
              <span>R$ {formatValueBRL(delivery)}</span>
            </TotalContent>
            <TotalContent>
              <Total>Total</Total>
              <Total>R$ {formatValueBRL(totalWithDelivery)}</Total>
            </TotalContent>
          </ContainerTotalPayment>
          <BtnContainerConfirm>
            <Link
              style={{ textDecoration: "none" }}
              to={isButtonEnabled ? "/sucess" : "#"}
              className={isButtonEnabled ? "" : "disabled-container"}
            >
              <BtnSucess
                type="submit"
                disabled={!isButtonEnabled}
                className={!isButtonEnabled ? "disabled-container" : ""}
                onClick={() => {
                  if (isButtonEnabled) {
                    clearCart();
                  }
                }}
              >
                confirmar pedido
              </BtnSucess>
            </Link>
          </BtnContainerConfirm>
        </CoffeeChosen>
      </CoffeeContainer>
    </CheckoutContainer>
  );
}
