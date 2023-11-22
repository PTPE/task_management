import styled from "styled-components";

const Sidebar = styled.div`
  max-width: 260px;
  background: white;
  height: 90%;
  position: relative;
  transition: all ease 300ms;
  &.hide {
    margin-left: -260px;
  }
  .toggleHide {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;

export { Sidebar };
