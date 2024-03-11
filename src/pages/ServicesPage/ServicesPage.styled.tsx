import styled from "styled-components";
import { selectDesktop, selectTablet } from "utils/selectMediaRequests";

export const SectionsContainer = styled.section`
  padding-top: 92px;
  padding-bottom: 92px;
`;

export const FullServiceList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  width: 100%;
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
  font-size: ${({ theme }) => theme.fontSize.mobile.primary};

  @media ${selectDesktop} {
    line-height: 1.17;
    font-size: ${({ theme }) => theme.fontSize.mobile.secondary};
  }
`;

export const ServiceListItem = styled.li`
  width: 100%;
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

  @media ${selectTablet} {
    width: calc((100% - 30px) / 2);
  }

  @media ${selectDesktop} {
    width: calc((100% - 60px) / 3);
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
  text-align: center;
`;
