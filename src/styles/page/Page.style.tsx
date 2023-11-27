import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .columns {
    flex: 1;
    display: flex;
    overflow: scroll;
  }
`;

export { Container };
