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
  line-height: 1.44;

  text-indent: 30px;
  margin-bottom: 16px;
  text-align: justify;
  font-family: "Roboto", sans-serif;
`;

export const ServiceList = styled.ul`
  margin-bottom: 24px;
`;

export const ServiceListItem = styled.li`
  line-height: 1.71;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  margin-left: 20px;

  &::marker {
    content: "— ";
    color: black;
    font-size: 20px;
  }
`;

export const ServiceNumberedItem = styled.li`
  line-height: 1.71;
  font-size: 20px;
  font-family: "Open Sans", sans-serif;
  margin-left: 20px;
`;
