import styled from "styled-components";
import { selectDesktop, selectTablet } from "utils/selectMediaRequests";

export const ReferenceListSection = styled.section`
  padding-top: 48px;
  padding-bottom: 48px;

  color: ${({ theme }) => theme.color.primaryTextColor};

  @media ${selectDesktop} {
    padding-top: 94px;
    padding-bottom: 94px;
  }
`;

export const RefrenceListTitle = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.17;
  margin-bottom: 24px;
`;

export const ReferenceListThumb = styled.div``;

export const References = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const ReferenceListItem = styled.li`
  height: 200px;
  width: 100%;
  position: relative;

  background-color: white;
  border: 1px solid grey;
  border-radius: 24px;

  overflow: hidden;
  user-select: none;

  @media ${selectTablet} {
    width: calc((100% - 16px) / 2);
  }

  @media ${selectDesktop} {
    width: calc((100% - 32px) / 3);
  }
`;

export const ReferenceListLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: inline-block;

  border-radius: 20px;
`;
