import styled from "styled-components";

const ThemeToggler = styled.div`
  margin: 0px 10px;
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  background: ${(props) => props.theme.bgSecondary};
`;

const ToggleButton = styled.button<{ $themeMode?: string }>`
  width: 40px;
  height: 20px;
  background: ${(props) => props.theme.purple};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  &:before {
    transition: all ease 300ms;
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    background: white;
    border-radius: 100%;
    margin-left: ${(props) =>
      props.$themeMode === "lightTheme" ? "4px" : "20px"};
  }
`;

export { ThemeToggler, ToggleButton };
