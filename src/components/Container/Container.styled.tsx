import styled from "styled-components";
import {
  selectDesktop,
  selectPhone,
  selectTablet,
} from "utils/selectMediaRequests";

export const DivContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @media ${selectPhone} {
    max-width: 360px;
  }

  @media ${selectTablet} {
    max-width: 768px;
    padding: 0 32px;
  }

  @media ${selectDesktop} {
    max-width: 1280px;
    padding: 0 16px;
  }
`;
