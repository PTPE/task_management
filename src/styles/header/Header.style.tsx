import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background: ${(props) => props.theme.bgPrimary};
`;

export { Header };
