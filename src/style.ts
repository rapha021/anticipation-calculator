import styled from "styled-components"

export const Central = styled.div`
  width: 100%;
  height: 100vh;

  /* margin: 100px 0; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 925px) {
    height: 100%;

    margin: 50px 0;
  }
`
