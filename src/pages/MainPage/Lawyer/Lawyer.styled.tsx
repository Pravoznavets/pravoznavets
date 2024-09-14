import styled from "styled-components";
import { selectDesktop, selectTablet } from "utils/selectMediaRequests";

export const LawyerDescriptionThumb = styled.div`
  width: 95%;
  margin-top: 24px;

  @media ${selectDesktop} {
    margin-top: 0;
    width: 45%;
  }
`;

export const LawyerText = styled.p`
  font-size: 18px;
  font-style: italic;
  line-height: 1.14;

  text-indent: 30px;
  margin-bottom: 12px;
  text-align: justify;

  @media ${selectDesktop} {
    font-size: 20px;
  }
`;

export const LawyerImage = styled.img`
  border-radius: 20px;
  transition: transform 0.5s ease-in-out;
`;

export const PhotoThumb = styled.div`
  width: 95%;

  @media ${selectDesktop} {
    width: 45%;
  }
`;

export const LawyerThumb = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media ${selectDesktop} {
    flex-direction: row;
  }
`;

export const LawyerSection = styled.section`
  padding-top: 48px;
  padding-bottom: 48px;
  background-color: rgba(203, 171, 97, 0.15);

  @media ${selectDesktop} {
    padding-top: 94px;
    padding-bottom: 94px;
  }

  &:hover ${LawyerImage} {
    transform: scale(1.1);

    @media ${selectTablet} {
      transform: scale(1.04);
    }

    @media ${selectDesktop} {
      transform: scale(1.12);
    }
  }
`;
