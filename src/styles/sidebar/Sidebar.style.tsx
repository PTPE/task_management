import styled from "styled-components";

const Sidebar = styled.div`
  width: 260px;
  background: ${(props) => props.theme.bgPrimary};
  transition: margin ease 1300ms;
  display: flex;
  z-index: 10;
  flex-direction: column;
  justify-content: space-between;
  &.hide {
    margin-left: -260px;
  }
`;

export { Sidebar };
