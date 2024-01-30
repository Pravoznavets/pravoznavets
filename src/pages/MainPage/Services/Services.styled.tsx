import styled from "styled-components";

export const ServicesContainer = styled.section`
  padding-top: 94px;
  padding-bottom: 94px;

  background-color: rgba(203, 171, 97, 0.15);
`;

export const ServiceSectionTitle = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.17;
  margin-bottom: 24px;
`;

export const ServiceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const ServiceItem = styled.li`
  display: flex;
  text-align: justify;
  justify-content: space-around;
  align-items: center;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

export const Img = styled.img`
  margin: 12px;
  width: 480px;
  height: 320px;

  border-radius: 24px;
  object-fit: cover;
`;

export const ServiceText = styled.p`
  width: 50%;
  color: ${({ theme }) => theme.color.primaryTextColor};
  font-size: 24px;
  line-height: 1.16;
  font-style: italic;

  &::first-line {
    margin-left: 20px;
  }
`;
