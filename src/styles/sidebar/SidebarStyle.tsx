import styled from "styled-components";

const Sidebar = styled.div`
  width: 260px;
  background: white;
  transition: all ease 300ms;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &.hide {
    margin-left: -260px;
  }
`;

export { Sidebar };
