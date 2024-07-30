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
          Ми докладемо всіх зусиль, щоб забезпечити вас надійною юридичною
          консультацією. Ваш захист та успіх у юридичних питаннях - наша головна
          цінність та пріоритет!
        </ServiceText>
      </ServiceContainer>
    </Container>
  );
};

export default ConsultationsService;
