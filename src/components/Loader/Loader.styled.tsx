import styled from "styled-components";

export const LoaderWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 75vh;
`;

export const ImgLoader = styled.img`
  position: absolute;
  top: calc(50% - 90px);
  left: calc(50% - 160px);
`;

export const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 999;
`;
