import styled from "styled-components";
import HeroImg from "assets/images/pravoznavets-hero.webp";

export const Section = styled.section`
  padding-top: 240px;
  padding-bottom: 240px;

  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${HeroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeroTitle = styled.h1`
    width: 80%;
    height: auto;
    color: #fff;
    margin: 0 auto;
    margin-bottom: 60px;
    font-size: 56px;
    line-height: 1.36;
    text-align: center;
    font-weight: 900;
    text-transform: uppercase;
}`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ theme }) => theme.color.accentColor};
  border-radius: 8px;
  width: 300px;
  height: 50px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;

  & > svg {
    margin-left: 16px;
    fill: #fff;
  }
`;
