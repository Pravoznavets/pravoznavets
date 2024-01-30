import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledArticle = styled.article`
  position: relative;
  display: flex;
  gap: 60px;

  padding: 24px 0;
  width: 100%;
  height: 400px;

  overflow: hidden;
`;

export const ArticleImage = styled.img`
  width: 480px;
  border-radius: 16px;
`;

export const ArticteTitle = styled.h3`
  color: ${({ theme }) => theme.color.primaryTextColor};
  margin-bottom: 16px;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.16;
`;

export const ArticleDescription = styled.p`
  font-size: 24px;
  line-height: 1.17;
  text-align: justify;
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
