import { CoffeeContainer, DivRow } from "./styles";
import { AllCoffees } from "./components/AllCoffees";
import { coffees } from "../../mock/coffees";

export function Coffees() {
  return (
    <CoffeeContainer>
      <h1>Nossos cafés</h1>
      <DivRow>
        {coffees.map((coffee) => (
          <AllCoffees coffeeProps={coffee} key={coffee.id} />
        ))}
      </DivRow>
    </CoffeeContainer>
  );
}
