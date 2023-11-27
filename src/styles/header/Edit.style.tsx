import styled from "styled-components";

const Edit = styled.div`
  position: relative;
`;

const EditIcon = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #848fa1;
  cursor: pointer;
`;

const EditOption = styled.ul`
  width: 150px;
  line-height: 25px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 10px;
  padding: 16px;
  position: absolute;
  right: 2%;
  top: 110%;
  display: none;
  &.active {
    display: block;
  }
  li {
    list-style: none;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    &.edit {
      color: #828fa3;
    }
    &.delete {
      color: #ea5555;
    }
  }
`;

export { Edit, EditIcon, EditOption };
