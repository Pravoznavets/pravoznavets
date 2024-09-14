import styled from "styled-components";
import {
  selectDesktop,
  selectPhone,
  selectTablet,
} from "utils/selectMediaRequests";

export const Main = styled.main`
  padding-top: 56px;

  @media ${selectTablet} {
    padding-top: 106px;
  }

  @media ${selectDesktop} {
    padding-top: 113px;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media ${selectPhone} {
    min-width: 320px;
  }

  @media ${selectTablet} {
    min-width: 768px;
    padding: 0 24px;
  }

  @media ${selectDesktop} {
    min-width: 1280px;
    padding: 0 24px;
  }
`;

export const VisibilityHidden = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
