import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
input:focus {
    outline: none;
    border: 1px solid var(--brand-yellow-dark, #C47F17);
    box-shadow: 0 0 2px ${(props) => props.theme["yellow-dark"]};
    }


body {
    background-color:${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
    font: 400 1rem Roboto, sans-serif;;
}               
`;
