import styled from "styled-components";
import HeroImg from "assets/images/pravoznavets-hero.webp";
import { selectDesktop, selectTablet } from "utils/selectMediaRequests";

export const Section = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;

  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${HeroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media ${selectTablet} {
    padding-top: 200px;
    padding-bottom: 200px;
  }

  @media ${selectDesktop} {
    padding-top: 240px;
    padding-bottom: 240px;
  }
`;

export const HeroTitle = styled.h1`
    width: 80%;
    height: auto;
    color: #fff;
    margin: 0 auto;
    margin-bottom: 60px;
    font-size: 28px;
    line-height: 1.21;
    text-align: center;
    font-weight: 900;
    text-transform: uppercase;

    @media ${selectDesktop} {
    font-size: 56px;
    line-height: 1.36;
  }

}`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ theme }) => theme.color.accentColor};
  border-radius: 8px;
  width: 280px;
  height: 50px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;

  @media ${selectDesktop} {
    width: 300px;
    height: 50px;
  }

  & > svg {
    margin-left: 16px;
    fill: #fff;
  }
`;
