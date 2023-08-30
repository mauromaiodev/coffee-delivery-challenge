import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import bigCoffee from "../../assets/Imagem.png";
import {
  HomeContainer,
  HomeContentColumn,
  SectionContentRow,
  Content,
  SpanCart,
  SpanTimer,
  SpanPackge,
  SpanCoffee,
} from "./styles";

export function Main() {
  return (
    <HomeContainer>
      <HomeContentColumn>
        <h1>
          Encontre o café perfeito <br />
          para qualquer hora do dia
        </h1>

        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />
          qualquer hora
        </p>

        <SectionContentRow>
          <Content>
            <span>
              <SpanCart>
                <ShoppingCart size={16} weight="fill" color="white" />
              </SpanCart>
              Compra simples e segura
            </span>
            <span>
              <SpanTimer>
                <Timer size={16} weight="fill" color="white" />
              </SpanTimer>
              Entrega rápida e rastreada
            </span>
          </Content>
          <Content>
            <span>
              <SpanPackge>
                <Package size={16} weight="fill" color="white" />
              </SpanPackge>
              Embalagem mantém o café intacto
            </span>
            <span>
              <SpanCoffee>
                <Coffee size={16} weight="fill" color="white" />
              </SpanCoffee>
              O café chega fresquinho até você
            </span>
          </Content>
        </SectionContentRow>
      </HomeContentColumn>
      <img src={bigCoffee} alt="" />
    </HomeContainer>
  );
}
