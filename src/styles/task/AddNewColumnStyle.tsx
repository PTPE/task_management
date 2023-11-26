import styled from "styled-components";

export const StatusCircle = styled.div<{ $color: "todo" | "doing" | "done" }>`
  width: 15px;
  height: 15px;
  background: #49c4e5;
  border-radius: 100%;
`;

export const AddNewColumn = styled.div`
  background: ${(props) => props.theme.bgTertiary};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 40px;
  &:hover {
    p {
      color: ${(props) => props.theme.purple};
    }
  }
  p {
    color: #828fa3;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    width: 280px;
  }
`;
