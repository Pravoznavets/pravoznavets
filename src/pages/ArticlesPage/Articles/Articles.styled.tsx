import styled from "styled-components";

export const ArticleContainer = styled.div`
  padding: 60px 30px;
`;

export const ArticleTitle = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  font-size: 40px;
`;

export const ArticleParagraphTitle = styled.h2`
  margin-left: 16px;
  margin-bottom: 24px;
  font-size: 32px;
`;

export const ArticlePointTitle = styled.h3`
  margin-left: 16px;
  margin-bottom: 24px;
  font-size: 28px;
`;

export const ArticleText = styled.p`
  font-size: 20px;
  line-height: 1.71;

  text-indent: 30px;
  margin-bottom: 16px;
  text-align: justify;
`;

export const ArticleList = styled.ul`
  margin-bottom: 24px;
`;

export const ArticleListItem = styled.li`
  line-height: 1.71;
  font-size: 20px;

  padding: 4px 0;
  margin-left: 48px;

  font-style: italic;

  &::marker {
    content: "🖋️   ";
    color: gold;
    font-size: 20px;
  }
`;

export const LiteratureHeader = styled.h4`
  margin-left: 16px;
  margin-bottom: 24px;
  font-size: 28px;
  text-align: center;
`;

export const LiteratureList = styled.ol`
  line-height: 1.21;
  font-size: 18px;

  padding: 4px 0;
  margin-left: 48px;
`;

export const LiteratureItem = styled.li`
  line-height: 1.18;
  font-size: 18px;

  padding: 4px 0;
`;
