import styled from "styled-components";

const Logo = styled.div`
  font-size: 32px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0px 103px 0px 43px;
  z-index: 10;
  color: ${(props) => props.theme.text};
`;

const LogoIcon = styled.div`
  display: flex;
  gap: 4px;
`;

const Bar = styled.div`
  width: 6px;
  height: 25px;
  border-radius: 10px;
  background: ${(props) => props.theme.purple};
  &.left {
    opacity: 1;
  }
  &.middle {
    opacity: 0.75;
  }
  &.right {
    opacity: 0.5;
  }
`;

export { Logo, LogoIcon, Bar };
