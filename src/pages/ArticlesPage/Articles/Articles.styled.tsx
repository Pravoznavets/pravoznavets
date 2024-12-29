import styled from "styled-components";

export const ArticleContainer = styled.div`
  padding: 20px 0;
  color: ${({ theme }) => theme.color.primaryTextColor};

  @media $(selectTablet) {
    padding: 60px 30px;
  }
`;

export const ArticleTitle = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  margin-top: 24px;
  font-size: 32px;

  @media $(selectTablet) {
    font-size: 40px;
  }
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
  line-height: 1.44;
  font-family: "Roboto", sans-serif;
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

  margin-left: 20px;

  &::marker {
    content: "— ";
    color: ${({ theme }) => theme.color.primaryTextColor};
    font-size: 20px;
  }
`;
export const ArticleNumberedItem = styled.li`
  line-height: 1.71;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  margin-left: 20px;
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
  font-family: "Open Sans", sans-serif;
  padding: 4px 0;
`;
