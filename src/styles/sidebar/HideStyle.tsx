import styled, { keyframes } from "styled-components";

const HideAnimation = keyframes`
  0% {
    display: none;
  }
  90% {
    display: none;
  }
  91% {
    display: block;
  }
`;

const Hide = styled.div`
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 700;
  color: #848fa1;
  display: flex;
  align-items: center;
  width: 90%;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  margin: 10px 0px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.purple};
    background: ${(props) => props.theme.lightestPurple};
  }
  &.hide {
    animation: ${HideAnimation} 300ms linear;
    margin-left: 260px;
    width: 25%;
    background: ${(props) => props.theme.purple};
  }
`;

export { Hide };
