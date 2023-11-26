import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .columns {
    flex: 1 0 auto;
    display: flex;
    overflow-x: scroll;
  }
`;

export { Container };
