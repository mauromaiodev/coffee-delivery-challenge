import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  padding: 2rem 10rem;
  justify-content: space-between;

  h2 {
    font-family: "Baloo 2";
    font-size: 1.125rem;
    font-weight: 700;
  }

  @media (max-width: 720px) {
    padding: 0;
    flex-direction: column;
  }
`;

export const CoffeeContainer = styled.div`
  h2 {
    margin-bottom: 15px;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
  }
`;
export const CoffeeChosen = styled.div`
  width: 448px;
  max-width: 100%;
  font-family: "Roboto";
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px;

  display: flex;
  gap: 24px;
  flex-direction: column;
  @media (max-width: 720px) {
    width: 300px;
  }
`;

export const CoffeeContent = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 64px;
  }

  span {
    font-weight: 600;
    color: ${(props) => props.theme["base-text"]};
  }

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const CoffeeDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1rem;
    font-weight: 400;
  }
`;
export const CoffeeAmount = styled.div`
  display: flex;
  gap: 8px;

  button {
    font-family: "Roboto";
    font-size: 0.75rem;
    text-transform: uppercase;
    border: none;
    border-radius: 6px;
    padding: 8px;
    background-color: ${(props) => props.theme["base-button"]};
  }
`;

export const ButtonAmount = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme["base-title"]};
  cursor: pointer;
`;

export const ButtonTrash = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${(props) => props.theme["base-text"]};
  font-weight: 500;
  cursor: pointer;
`;

export const Hr = styled.hr`
  color: ${(props) => props.theme["base-button"]};
  opacity: 0.2;
`;

export const ContainerTotalPayment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

export const TotalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme["base-text"]};
  font-size: 0.875rem;
`;

export const Total = styled.span`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1.25rem;
  font-weight: 700;
`;
export const BtnSucess = styled.button`
  font-family: "Roboto";
  display: flex;
  align-items: center;
  width: 368px;
  max-width: 100%;
  justify-content: center;
  padding: 12px 8px;
  border: none;
  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 6px;
  cursor: pointer;

  @media (max-width: 720px) {
    width: 230px;
  }
`;

export const BtnContainerConfirm = styled.div`
  display: flex;
  :hover {
    background: ${(props) => props.theme["yellow-dark"]};
    border-radius: 6px;
  }
  .disabled-container {
    cursor: not-allowed;
  }
`;
