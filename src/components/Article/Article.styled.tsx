import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectDesktop } from "utils/selectMediaRequests";

export const StyledArticle = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 24px 0;
  width: 100%;

  overflow: hidden;

  @media ${selectDesktop} {
    position: relative;
    flex-direction: row;
    gap: 60px;

    padding: 24px 0;
    width: 100%;
    height: 400px;
  }
`;

export const ArticleImage = styled.img`
  width: 100%;
  border-radius: 16px;

  @media ${selectDesktop} {
    width: 480px;
  }
`;

export const ArticteTitle = styled.h3`
  color: ${({ theme }) => theme.color.primaryTextColor};
  margin-bottom: 16px;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.16;

  @media ${selectDesktop} {
    font-size: 48px;
  }
`;

export const ArticleDescription = styled.p`
  font-size: 18px;
  line-height: 1.13;
  text-align: justify;
  padding-bottom: 20px;

  @media ${selectDesktop} {
    font-size: 24px;
  }
`;

export const LearnMoreLink = styled(Link)`
  position: absolute;
  right: 24px;
  bottom: 12px;
  color: ${({ theme }) => theme.color.accentColor};
  font-size: 18px;
  font-weight: 500;
  transition: ${({ theme }) => theme.transitionHover};

  &:hover,
  &:focus {
    scale: 1.05;
  }
`;
