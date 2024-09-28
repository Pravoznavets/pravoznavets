import Container from "components/Container";
import { FC } from "react";
import {
  ServiceContainer,
  ServiceText,
  ServiceTitle,
} from "../Services.styled";

const HousingIssuesService: FC = () => {
  return (
    <Container>
      <ServiceContainer>
        <ServiceTitle>Житлові питання</ServiceTitle>
        <ServiceText>
          Ми пропонуємо професійну юридичну допомогу у вирішенні питань,
          пов'язаних з купівлею, продажем та орендою житла. Наші фахівці також
          допоможуть вам у спорах із житлово-комунальними службами, у питаннях
          спадщини та розподілу житлової нерухомості, а також при поділі майна
          між подружжям. Ми забезпечимо надійну правову підтримку для захисту
          ваших інтересів у житлових питаннях.
        </ServiceText>
      </ServiceContainer>
    </Container>
  );
};

export default HousingIssuesService;
