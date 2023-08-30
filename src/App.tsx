import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { CoffeeProvider } from "./contexts/CoffeeContext";
import { AddressProvider } from "./contexts/AddressContext";
import { PaymentProvider } from "./contexts/PaymentContext";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeProvider>
          <PaymentProvider>
            <AddressProvider>
              <Router />
            </AddressProvider>
          </PaymentProvider>
        </CoffeeProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
