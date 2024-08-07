import Container from "components/Container";
import React, { FC } from "react";
import {
  ServiceContainer,
  ServiceText,
  ServiceTitle,
} from "../Services.styled";

const CorporateLawService: FC = () => {
  return (
    <Container>
      <ServiceContainer>
        <ServiceTitle>Корпоративне право</ServiceTitle>
        <ServiceText>
          Усі суб’єкти господарської діяльності на території України проходять
          обов’язкові стадії, починаючи від їх створення (реєстрації), розвитку,
          ведення та припинення господарської діяльності. Ці етапи мають правове
          регулювання, що відбувається шляхом проведення відповідних
          реєстраційних дій різної складності та кількості, які в свою чергу
          залежать від організаційно-правової форми, видів, галузей діяльності
          та інших умов.
        </ServiceText>
        <ServiceText>
          Ми надаємо юридичні послуги щодо підготовки та реєстрації необхідних
          документів, статутів, корпоративних договорів, погоджень, внутрішніх
          положень. Також ми забезпечуємо комплексне юридичне супроводження
          суб’єктів господарювання, починаючи від стадії їх створення
          (реєстрації), внесення необхідних змін та припинення діяльності
          суб’єктів господарювання, резидентів України.
        </ServiceText>
      </ServiceContainer>
    </Container>
  );
};

export default CorporateLawService;
