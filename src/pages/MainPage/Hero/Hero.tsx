import { FC } from "react";
import { Button, ButtonLink, HeroTitle, Section } from "./Hero.styled";
import Container from "components/Container";
import Icon from "components/Icon/Icon";

const Hero: FC = () => {
  return (
    <Section>
      <Container>
        <HeroTitle>
          Наші послуги можуть стати для вас як щитом, так і мечем
        </HeroTitle>
        <ButtonLink
          to="https://t.me/AdvokatOkcana"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Button>
            <span>Замовити консультацію</span>
            <Icon iconName="icon-send" />
          </Button>
        </ButtonLink>
      </Container>
    </Section>
  );
};

export default Hero;
