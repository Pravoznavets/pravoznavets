import styled, { keyframes } from "styled-components";
import HeroImg from "assets/images/pravoznavets-hero.webp";
import { selectDesktop, selectTablet } from "utils/selectMediaRequests";
import { Link } from "react-router-dom";

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

    background: transparent;
    backdrop-filter: blur(10px);
    border: 1px solid white;
    border-radius: 8px;
    padding: 12px;

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

const buttonAnnimationTop = keyframes`
0%
{
transform: translateX(-100%);
}
100%
{
transform: translateX(100%);
}
`;

const buttonAnnimationRight = keyframes`
0%
{
transform: translateY(-100%);
}
100%
{
transform: translateY(100%);
}
`;

const buttonAnnimationBottom = keyframes`
0%
{
transform: translateX(100%);
}
100%
{
transform: translateX(-100%);
}
`;

const buttonAnnimationLeft = keyframes`
0%
{
transform: translateY(100%);
}
100%
{
transform: translateY(-100%);
}
`;

export const ButtonLink = styled(Link)`
  position: relative;

  display: block;
  width: 280px;
  height: 50px;
  margin: 0 auto;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);

  overflow: hidden;
  user-select: none;

  @media ${selectDesktop} {
    width: 300px;
    height: 50px;
  }

  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.1);

    & > span:nth-child(1) {
      opacity: 1;
    }

    & > span:nth-child(2) {
      opacity: 1;
    }

    & > span:nth-child(3) {
      opacity: 1;
    }

    & > span:nth-child(4) {
      opacity: 1;
    }
  }

  & > span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    opacity: 0;

    transition: opacity 0.3s linear;
    animation: ${buttonAnnimationTop} 2s linear infinite;

    background: linear-gradient(to right, rgba(47, 48, 58, 0.2), white);
  }

  & > span:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    opacity: 0;

    transition: opacity 0.3s linear;
    animation: ${buttonAnnimationRight} 2s linear infinite;
    animation-delay: 1s;

    background: linear-gradient(to bottom, rgba(47, 48, 58, 0.2), white);
  }

  & > span:nth-child(3) {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 4px;
    opacity: 0;

    transition: opacity 0.3s linear;
    animation: ${buttonAnnimationBottom} 2s linear infinite;

    background: linear-gradient(to left, rgba(47, 48, 58, 0.2), white);
  }

  & > span:nth-child(4) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 4px;
    height: 100%;
    opacity: 0;

    transition: opacity 0.3s linear;
    animation: ${buttonAnnimationLeft} 2s linear infinite;
    animation-delay: 1s;

    background: linear-gradient(to top, rgba(47, 48, 58, 0.2), white);
  }
`;
