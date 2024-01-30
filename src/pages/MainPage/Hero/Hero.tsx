import { FC } from "react";
import { Button, HeroTitle, Section } from "./Hero.styled";
import Container from "components/Container";
import Icon from "components/Icon/Icon";

const Hero: FC = () => {
  return (
    <Section>
      <Container>
        <HeroTitle>
          Наші послуги можуть стати для вас як щитом, так і мечем
        </HeroTitle>
        <Button>
          <span>Замовити консультацію</span>
          <Icon iconName="icon-send" />
        </Button>
      </Container>
    </Section>
  );
};

export default Hero;
