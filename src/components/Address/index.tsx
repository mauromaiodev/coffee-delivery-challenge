import {
  MapPin,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import {
  Content,
  ContainerAddress,
  ContentAddress,
  IconAlignment,
  TextAlignment,
  Inputs,
  InputsRow,
  ContainerPayment,
  ContainerPaymentButtons,
  Buttons,
} from "./styles";
import axios from "axios";
import { useState } from "react";
import { useContext } from "use-context-selector";
import { AddressContext } from "../../contexts/AddressContext";
import { PaymentContext } from "../../contexts/PaymentContext";

export function Address() {
  const [cep, setCep] = useState("");
  const { address, setAddressData, number, setNumber } =
    useContext(AddressContext);
  const { handlePaymentClick, selectedPayment } = useContext(PaymentContext);

  const handleSearchCEP = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setAddressData(response.data);
    } catch (error) {
      console.error("Erro ao buscar cep" + error);
    }
  };

  return (
    <Content>
      <h2> Complete seu pedido</h2>
      <ContainerAddress>
        <ContentAddress>
          <IconAlignment>
            <MapPin size={20} color="#C47F17" />
            <TextAlignment>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </TextAlignment>
          </IconAlignment>
        </ContentAddress>
        <Inputs>
          <input
            type="text"
            placeholder="CEP"
            className="cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            onKeyDown={handleSearchCEP}
            required={true}
          />
          {address && (
            <div className="address-cont">
              <input
                type="text"
                placeholder={address.logradouro}
                disabled
                className="street"
              />
              <InputsRow>
                <input
                  type="text"
                  value={number}
                  placeholder="número"
                  onChange={(e) => setNumber(e.target.value)}
                  className="number"
                />
                <input
                  type="text"
                  placeholder="Complemento"
                  className="complement"
                />
              </InputsRow>
              <InputsRow>
                <input
                  type="text"
                  placeholder={address.bairro}
                  disabled
                  className="neighborhood"
                />
                <input
                  type="text"
                  placeholder={address.localidade}
                  disabled
                  className="city"
                />
                <input
                  type="text"
                  placeholder={address.uf}
                  className="state"
                  disabled
                />
              </InputsRow>
            </div>
          )}
        </Inputs>
      </ContainerAddress>
      <ContainerPayment>
        <IconAlignment>
          <CurrencyDollar size={22} color="#8047F8" />
          <TextAlignment>
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </TextAlignment>
        </IconAlignment>
        <ContainerPaymentButtons aria-required>
          <Buttons
            onClick={() => handlePaymentClick("creditCard")}
            className={
              selectedPayment === "creditCard" ? "selected-button" : ""
            }
          >
            <CreditCard size={16} color="#8047F8" />
            cartão de crédito
          </Buttons>
          <Buttons
            onClick={() => handlePaymentClick("debitCard")}
            className={selectedPayment === "debitCard" ? "selected-button" : ""}
          >
            <Bank size={16} color="#8047F8" />
            cartão de débito
          </Buttons>
          <Buttons
            onClick={() => handlePaymentClick("money")}
            className={selectedPayment === "money" ? "selected-button" : ""}
          >
            <Money size={16} color="#8047F8" />
            dinheiro
          </Buttons>
        </ContainerPaymentButtons>
      </ContainerPayment>
    </Content>
  );
}
