import Container from "components/Container";
import React, { FC } from "react";
import {
  ServiceContainer,
  ServiceList,
  ServiceListItem,
  ServiceText,
  ServiceTitle,
} from "../Services.styled";

const JudicialPracticeService: FC = () => {
  return (
    <Container>
      <ServiceContainer>
        <ServiceTitle>Судова практика</ServiceTitle>
        <ServiceText>
          Одним із основних напрямків нашої діяльності є судове представництво.
          Ми зможемо захистити права та відстояти інтереси юридичних осіб та
          фізичних осіб у судах всіх інстанцій.
        </ServiceText>
        <ServiceText>
          Ми здійснюємо представництво юридичних осіб у всіх судах цивільної,
          господарської, адміністративної юрисдикції, в тому числі, але не
          виключно, у спорах:
        </ServiceText>
        <ServiceList>
          <ServiceListItem>
            щодо стягнення кредиторської та дебіторської заборгованості;
          </ServiceListItem>
          <ServiceListItem>щодо нерухомості;</ServiceListItem>
          <ServiceListItem>спорах, що випливають з договорів;</ServiceListItem>
          <ServiceListItem>адміністративних спорах;</ServiceListItem>
          <ServiceListItem>корпоративних спорах;</ServiceListItem>
          <ServiceListItem>щодо захисту ділової репутації;</ServiceListItem>
          <ServiceListItem>
            спорах у сфері інтелектуальної власності.
          </ServiceListItem>
        </ServiceList>
        <ServiceText>
          Ми здійснюємо представництво фізичних осіб у всіх судах цивільної,
          господарської, адміністративної юрисдикції, в тому числі, але не
          виключно, у:
        </ServiceText>
        <ServiceList>
          <ServiceListItem>спорах, що випливають з договорів;</ServiceListItem>
          <ServiceListItem>спорах щодо відшкодування шкоди;</ServiceListItem>
          <ServiceListItem>сімейних спорах;</ServiceListItem>
          <ServiceListItem>трудових спорах;</ServiceListItem>
          <ServiceListItem>спадкових спорах;</ServiceListItem>
          <ServiceListItem>спорах щодо нерухомості;</ServiceListItem>
          <ServiceListItem>адміністративних спорах;</ServiceListItem>
          <ServiceListItem>
            спорах у сфері захисту прав споживачів;
          </ServiceListItem>
          <ServiceListItem>
            спорах у сфері інтелектуальної власності;
          </ServiceListItem>
        </ServiceList>
        <ServiceText>
          Вартість послуг залежить від складності справи й від кількості часу,
          який необхідно витратити на досягнення результату включаючи кількість
          судових засідань, які потрібно відвідати.
        </ServiceText>
      </ServiceContainer>
    </Container>
  );
};

export default JudicialPracticeService;
