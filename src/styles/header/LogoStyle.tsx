import styled from "styled-components";

const Logo = styled.div`
  font-size: 32px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0px 103px 0px 43px;
`;

const LogoIcon = styled.div`
  display: flex;
  gap: 4px;
`;

const Bar = styled.div`
  width: 6px;
  height: 25px;
  border-radius: 10px;
  &.left {
    background: ${(props) => props.theme.purple};
  }
  &.middle {
    background: ${(props) => props.theme.lightPurple};
  }
  &.right {
    background: ${(props) => props.theme.lightestPurple};
  }
`;

export { Logo, LogoIcon, Bar };
