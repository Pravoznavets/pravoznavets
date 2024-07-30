import Container from "components/Container";
import React, { FC } from "react";
import {
  ServiceContainer,
  ServiceList,
  ServiceListItem,
  ServiceText,
  ServiceTitle,
} from "../Services.styled";

const LicensesAndPermitsService: FC = () => {
  return (
    <Container>
      <ServiceContainer>
        <ServiceTitle>Ліцензії та дозволи</ServiceTitle>
        <ServiceText>
          Ліцензія на торгівлю – це офіційний документ, що видається державним
          органом і надає право здійснювати певний вид торговельної діяльності.
          Ліцензія підтверджує, що суб'єкт господарювання (юридична або фізична
          особа) відповідає встановленим законодавством вимогам для здійснення
          відповідної діяльності.
        </ServiceText>
        <ServiceText>Ми надаємо такі види ліцензій:</ServiceText>
        <ServiceList>
          <ServiceListItem>
            ліцензія на алкоголь (для здійснення роздрібної торгівлі
            алкогольними напоями);
          </ServiceListItem>
          <ServiceListItem>
            ліцензія для здійснення роздрібної торгівлі алкогольними напоями –
            сидром та перрі (без додання спирту);
          </ServiceListItem>
          <ServiceListItem>
            ліцензія для здійснення роздрібної торгівлі алкогольними напоями
            (пивом);
          </ServiceListItem>
          <ServiceListItem>
            ліцензія на тютюн (для здійснення роздрібної торгівлі тютюновими
            виробами);
          </ServiceListItem>
          <ServiceListItem>
            ліцензія на виробництво алкогольних напоїв;
          </ServiceListItem>
          <ServiceListItem>
            ліцензія на оптову торгівлю алкогольними напоями;
          </ServiceListItem>
          <ServiceListItem>
            ліцензія на виробництво лікарських засобів;
          </ServiceListItem>
          <ServiceListItem>
            ліцензія на роздрібну торгівлю лікарськими засобами.
          </ServiceListItem>
        </ServiceList>
      </ServiceContainer>
    </Container>
  );
};

export default LicensesAndPermitsService;
