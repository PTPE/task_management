import styled from "styled-components";

const Sidebar = styled.div`
  height: 100%;
  padding-top: 80px;
  width: 260px;
  background: white;
  position: fixed;
  z-index: 9;
  top: 0px;
  transition: all ease 300ms;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &.hide {
    margin-left: -260px;
  }
`;

export { Sidebar };
