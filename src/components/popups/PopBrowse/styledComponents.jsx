import styled from "styled-components";

const PopBrowsContainer = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  z-index: 7;
  position: absolute;
  top: 0;
  left: 0;

  &.active {
    display: flex;
  }

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

const PopBrowsBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: 495px) {
    padding: 20px 16px 32px;
  }
`;

const PopBrowsTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

const Title = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

const StatusBlock = styled.div`
  margin-bottom: 11px;
`;

const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  background: ${({ $color }) => $color || "transparent"};
  cursor: pointer;
`;

const TextArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  color: #000;
  &::placeholder {
    color: #94a6be;
  }
`;

const Button = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ $primary }) => ($primary ? "#565eef" : "transparent")};
  border: ${({ $primary }) => ($primary ? "none" : "0.7px solid #565eef")};
  color: ${({ $primary }) => ($primary ? "#ffffff" : "#565eef")};

  &:hover {
    background: ${({ $primary }) => ($primary ? "#4049c9" : "#eaeef6")};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const S = {
  PopBrowsContainer,
  PopBrowsBlock,
  PopBrowsTopBlock,
  Title,
  StatusBlock,
  StatusThemes,
  StatusTheme,
  TextArea,
  Button,
};

export default S;
