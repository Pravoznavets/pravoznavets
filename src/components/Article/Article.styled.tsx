import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectDesktop, selectTablet } from "utils/selectMediaRequests";

export const StyledArticle = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 12px 0;
  width: 100%;
  height: 100%;

  @media ${selectTablet} {
    flex-direction: row;
  }

  @media ${selectDesktop} {
    position: relative;
    flex-direction: row;
    gap: 60px;

    padding: 24px 0;
    width: 100%;
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  height: 100px;
  border-radius: 16px;
  object-fit: cover;

  @media ${selectTablet} {
    width: 150px;
  }

  @media ${selectDesktop} {
    width: 480px;
    height: 320px;
  }
`;

export const ArticteTitle = styled.h3`
  color: ${({ theme }) => theme.color.primaryTextColor};
  margin-bottom: 8px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.1;

  @media ${selectDesktop} {
    margin-bottom: 16px;
    font-size: 32px;
  }
`;

export const ArticleDescription = styled.p`
  font-size: 12px;
  line-height: 1.11;
  text-align: justify;
  padding-bottom: 20px;

  @media ${selectDesktop} {
    font-size: 20px;
  }
`;

export const LearnMoreLink = styled(Link)`
  position: absolute;
  right: 24px;
  bottom: -4px;
  color: ${({ theme }) => theme.color.accentColor};
  font-size: 14px;
  font-weight: 500;
  transition: ${({ theme }) => theme.transitionHover};

  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;

  transform-style: preserve-3d;
  perspective: 1000px;
  transform-origin: center center;

  @media ${selectDesktop} {
    bottom: 0;
    font-size: 18px;
    width: 200px;
    height: 50px;
    line-height: 50px;
  }

  & > span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    text-align: center;
    line-height: 30px;
    background: rgba(255, 255, 255, 0.05);
    transform-style: preserve-3d;
    backface-visibility: hidden;
    border-radius: 30px;
    transition: 1s;

    @media ${selectDesktop} {
      line-height: 50px;
    }
  }

  & > span:first-child {
    transform: rotateX(0deg) translateZ(20px);
    color: white;
  }

  & > span:last-child {
    transform: rotateX(180deg) translateZ(20px);
  }

  & > span:nth-child(2) {
    background-color: ${({ theme }) => theme.color.accentColor};
  }

  & > span:nth-child(2):before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    border: 2px solid ${({ theme }) => theme.color.accentColor};
    border-radius: 30px;
    transform: translateZ(-1px);
  }

  &:hover {
    & > span:first-child {
      transform: rotateX(-180deg) translateZ(20px);
    }

    & > span:last-child {
      transform: rotateX(0deg) translateZ(20px);
    }

    & > span:nth-child(2) {
      transform: rotateX(-180deg);
    }
  }
`;
