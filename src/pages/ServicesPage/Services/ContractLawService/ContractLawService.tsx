import Container from "components/Container";
import React, { FC } from "react";
import {
  ServiceContainer,
  ServiceText,
  ServiceTitle,
} from "../Services.styled";

const ContractLawService: FC = () => {
  return (
    <Container>
      <ServiceContainer>
        <ServiceTitle>Договірне право</ServiceTitle>
        <ServiceText>
          Ми надаємо послуги з оцінки, розробки та супроводу укладення договору
          як для фізичних осіб так і для бізнесу. Ми підготуємо договір
          будь-якої складності або проаналізуємо Ваш існуючий договір та
          складемо перелік пропозицій та/або ризиків з метою захисту Ваших
          інтересів.
        </ServiceText>
      </ServiceContainer>
    </Container>
  );
};

export default ContractLawService;
