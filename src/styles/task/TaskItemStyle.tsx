import styled from "styled-components";

export const ItemName = styled.h3`
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  color: black;
  margin-bottom: 8px;
  word-wrap: break-word;
`;

export const TaskItem = styled.div`
  width: 280px;
  min-height: 80px;
  background: white;
  padding: 23px 16px;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  &:hover ${ItemName} {
    color: ${(props) => props.theme.purple};
  }
`;

export const SubTask = styled.p`
  color: #828fa3;
  font-weight: 700;
  font-size: 12px;
`;
