import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  @media (max-width: 720px) {
    padding: 1.5rem 0.5rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
`;

export const HeaderLocation = styled.span`
  display: flex;
  gap: 0.25rem;
  background-color: ${(props) => props.theme["purple-light"]};
  padding: 0.5rem;
  color: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;
`;

export const HeaderCart = styled.span`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme["yellow-light"]};
  border-radius: 6px;
  padding: 0.5rem;
  cursor: pointer;

  .cart-badge {
    position: absolute;
    top: 29px;
    right: 150px;
    background-color: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme.white};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
  }

  @media (max-width: 720px) {
    .cart-badge {
      top: 14px;
      right: 5px;
    }
  }
`;
