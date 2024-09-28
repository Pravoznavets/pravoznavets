import Container from "components/Container";
import { FC } from "react";
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
          Ми пропонуємо професійні послуги з підготовки, аналізу та супроводу
          договорів для фізичних осіб та бізнесу. Наші спеціалісти допоможуть
          розробити договір будь-якої складності або ретельно проаналізують вже
          існуючі угоди, визначивши можливі ризики та надавши рекомендації щодо
          їх мінімізації. Ми працюємо для того, щоб максимально захистити Ваші
          інтереси та забезпечити надійність і прозорість договірних відносин.
        </ServiceText>
      </ServiceContainer>
    </Container>
  );
};

export default ContractLawService;
