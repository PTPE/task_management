import styled from "styled-components";

export const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  color: white;
  border: none;
  border-radius: 50px;
  background: ${(props) => props.theme.purple};
  padding: 14px 28px;
  margin-right: 10px;
  cursor: pointer;
  transition: all ease 300ms;
  &:hover {
    background: ${(props) => props.theme.lightPurple};
  }
`;
