import styled from "styled-components";

export const SectionsContainer = styled.section`
  padding-top: 92px;
  padding-bottom: 92px;
`;

export const FullServiceList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  margin: 0 auto;
`;

export const ServiceDescription = styled.div`
  position: absolute;
  top: 100%;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.accentBackground};

  transition: all ${({ theme }) => theme.transitionHover};
`;

export const ServiceHiddenText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 48px);
  line-height: 1.56;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.mobile.secondary};
`;

export const ServiceListItem = styled.li`
  width: calc((100% - 60px) / 3);
  border: 1px solid ${({ theme }) => theme.color.secondaryBackgroundColor};
  transition: all ${({ theme }) => theme.transitionHover};

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow};
    scale: 1.05;

    & ${ServiceDescription} {
      top: 0;
    }
  }
`;

export const Thumb = styled.div`
  overflow: hidden;
  position: relative;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const ServiceTitle = styled.h2`
  padding: 20px 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.primaryTextColor};
`;
