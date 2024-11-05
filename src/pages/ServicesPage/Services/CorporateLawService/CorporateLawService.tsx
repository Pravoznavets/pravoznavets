import Container from "components/Container";
import { FC } from "react";
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
          Ми надаємо повний спектр юридичних послуг у сфері корпоративного
          права, починаючи з підготовки та реєстрації установчих документів,
          статутів, корпоративних договорів і внутрішніх положень. Наші фахівці
          забезпечують комплексний юридичний супровід суб'єктів господарювання
          на всіх етапах їх діяльності — від реєстрації та внесення змін до
          припинення діяльності. Ми гарантуємо професійний підхід для захисту
          ваших корпоративних інтересів та ефективне вирішення юридичних питань.
        </ServiceText>
      </ServiceContainer>
    </Container>
  );
};

export default CorporateLawService;