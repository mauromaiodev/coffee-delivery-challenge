import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Checkout } from "./pages/Checkout";
import { Sucess } from "./pages/CheckoutSucess";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/sucess" element={<Sucess />} />
      </Route>
    </Routes>
  );
}
