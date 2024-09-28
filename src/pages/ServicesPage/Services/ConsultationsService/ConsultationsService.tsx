import Container from "components/Container";
import { FC } from "react";
import {
  ServiceContainer,
  ServiceText,
  ServiceTitle,
} from "../Services.styled";

const ConsultationsService: FC = () => {
  return (
    <Container>
      <ServiceContainer>
        <ServiceTitle>Консультації</ServiceTitle>
        <ServiceText>
          Ми прагнемо надати вам якісні та надійні юридичні консультації,
          допомагаючи знайти найкращі рішення для ваших питань. Ваш захист і
          успіх у правових справах – наш головний пріоритет. Ми докладаємо
          максимум зусиль, щоб забезпечити вас професійною підтримкою та
          юридичною порадою, що гарантує впевненість у кожному кроці.
        </ServiceText>
      </ServiceContainer>
    </Container>
  );
};

export default ConsultationsService;
