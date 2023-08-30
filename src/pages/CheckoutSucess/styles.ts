import styled from "styled-components";

export const ContainerSucess = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 1rem;

    img {
      width: 200px;
    }
  }
`;

export const SucessTitle = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Baloo 2";
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme["yellow-dark"]};
  }
  p {
    font-family: "Roboto";
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
    font-weight: 400;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 720px) {
    h1 {
      font-size: 1.5rem;
      width: 100%;
      text-align: center;
    }
    p {
      display: none;
    }
  }
`;

export const SucessContent = styled.div`
  width: 526px;
  max-width: 100%;
  padding: 40px;
  background:
    linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(to right, #c47f17, #4b2995) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    font-family: "Roboto";
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-text"]};
  }

  @media (max-width: 720px) {
    width: 300px;
  }
`;

export const IconAlignment = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  .map {
    display: flex;
    background-color: ${(props) => props.theme.purple};
    padding: 8px;
    border-radius: 100%;
  }

  .timer {
    display: flex;
    background-color: ${(props) => props.theme.yellow};
    padding: 8px;
    border-radius: 100%;
  }
  .dolar {
    display: flex;
    background-color: ${(props) => props.theme["yellow-dark"]};
    padding: 8px;
    border-radius: 100%;
  }

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const IconContent = styled.div`
  display: flex;
  flex-direction: column;
`;
