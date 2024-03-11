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
    min-width: 320px;
  }

  @media ${selectTablet} {
    min-width: 768px;
    padding: 0 32px;
  }

  @media ${selectDesktop} {
    width: 1280px;
    padding: 0 16px;
  }
`;
