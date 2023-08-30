import styled from "styled-components";

export const CoffeeContent = styled.div`
  position: relative;
  width: 256px;
  height: 310px;
  max-width: 100%;
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme["base-card"]};

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  img {
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h2 {
    font-family: "Baloo 2";
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 26px;
    margin-bottom: 8px;
  }
  p {
    color: ${(props) => props.theme["base-label"]};
    text-align: center;
    font-family: "Roboto";
    font-size: 0.875rem;
    font-weight: 400;
    margin-bottom: 12px;
    padding: 0px 20px;
  }

  .tags {
    display: flex;
  }

  .row {
    display: flex;
    margin-top: 76px;
    gap: 4px;
  }
`;

export const CoffeeType = styled.span`
  background-color: ${(props) => props.theme["yellow-light"]};
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  color: ${(props) => props.theme["yellow-dark"]};
  font-family: "Roboto";
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 26px;
  text-transform: uppercase;
  z-index: 999999;
`;

export const ContentPrice = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

export const Price = styled.div`
  span {
    font-family: "Roboto";
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
  }
  strong {
    font-family: "Baloo 2";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }
`;

export const ContentAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const AmountCart = styled.span`
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 8px;

  .minus {
    cursor: pointer;
  }
  .plus {
    cursor: pointer;
  }
`;

export const Cart = styled.span`
  background-color: ${(props) => props.theme["purple-dark"]};
  padding: 5px;
  border-radius: 6px;
`;
