import Container from "components/Container";
import React, { FC } from "react";
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
          Ми надаємо професійну юридичну допомогу в питаннях, пов'язаних з
          продажем, купівлею, орендою житла, а також вирішуємо спори з житловими
          та комунальними службами, питання, пов’язаних із вступом у спадщину і
          розподіл житлової нерухомості, а також питання поділу нерухомого майна
          подружжя. Ми допомагаємо нашим клієнтам захистити свої права та
          інтереси в області житлового законодавства, представляємо їх інтереси
          в суді і консультуємо з усіх питань, пов'язаних з нерухомістю.
        </ServiceText>
      </ServiceContainer>
    </Container>
  );
};

export default HousingIssuesService;
