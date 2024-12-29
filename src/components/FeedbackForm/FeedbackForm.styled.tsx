import styled from "styled-components";
import { selectTablet } from "utils/selectMediaRequests";

export const FeedbackFormWrapper = styled.section`
  padding: 60px 0;
  border-top: 1px solid gray;
  background-color: rgba(203, 171, 97, 0.15);
`;

export const FormTitle = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.17;
  margin-bottom: 24px;
`;

export const FormThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 600px;
  padding: 40px 20px;

  border: 1px solid ${({ theme }) => theme.color.accentColor};
  border-radius: 24px;
  background-color: white;
`;

export const FormBlock = styled.div`
  position: relative;

  width: 100%;
  margin-bottom: 24px;
`;

export const FormLabel = styled.label`
  position: absolute;
  padding: 8px 16px;
  left: 0;
  top: 5px;

  transition: all 0.3s linear;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 12px 16px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.accentColor};

  transition: all 0.3s linear;

  &:focus {
    scale: 1.03;
  }

  &:focus + ${FormLabel}, &:not(:placeholder-shown) + ${FormLabel} {
    color: ${({ theme }) => theme.color.accentColor};
    top: -12px;
    left: 12px;
    padding: 2px;
    background-color: white;
  }
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.accentColor};

  transition: all 0.3s linear;
  resize: none;

  &:focus {
    scale: 1.03;
  }

  &:focus + ${FormLabel}, &:not(:placeholder-shown) + ${FormLabel} {
    color: ${({ theme }) => theme.color.accentColor};
    top: -14px;
    left: 12px;
    padding: 2px;
    background-color: white;
  }
`;

export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ theme }) => theme.color.accentColor};
  border-radius: 8px;
  width: 180px;
  height: 50px;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;

  transition: all 0.3s linear;

  &:focus,
  &:hover {
    background-color: white;
    border: 1px solid ${({ theme }) => theme.color.accentColor};
    color: ${({ theme }) => theme.color.accentColor};
    scale: 1.1;
  }

  @media ${selectTablet} {
    width: 280px;
  }
`;
