import styled from "styled-components";

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 10rem;

  h1 {
    font-family: "Baloo 2";
    font-size: 2rem;
    color: ${(props) => props.theme["base-subtitle"]};
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 3.125rem;
  }

  @media (max-width: 720px) {
    padding: 0;
    margin-bottom: 5rem;
    h1 {
      width: 100%;
      text-align: center;
    }
  }
`;
export const DivRow = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;

  @media (max-width: 720px) {
    justify-content: center;
    align-items: center;
  }
`;
