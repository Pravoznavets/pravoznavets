import styled from "styled-components";

export const ServiceContainer = styled.div`
  padding: 60px 30px;
`;

export const ServiceTitle = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  font-size: 40px;
`;

export const ServiceText = styled.p`
  font-size: 20px;
  line-height: 1.71;

  text-indent: 30px;
  margin-bottom: 16px;
  text-align: justify;
`;

export const ServiceList = styled.ul`
  margin-bottom: 24px;
`;

export const ServiceListItem = styled.li`
  line-height: 1.71;
  font-size: 20px;

  padding: 4px 0;
  margin-left: 48px;

  font-style: italic;

  &::marker {
    content: "🖋️";
    color: gold;
    font-size: 20px;
  }
`;
