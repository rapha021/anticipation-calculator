import styled from "styled-components"

const Main = styled.section`
  width: 50%;
  height: 400px;

  background-color: #414361;
  border-radius: 3px;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .form-fields {
    height: 90%;
    width: 60%;

    p {
      color: #ffa9e7c7;
    }
  }

  .results {
    height: 100%;
    width: 40%;

    background-color: #1d1e2c;

    font-style: italic;
    color: #ffa9e7;
    h2 {
      width: 160px;
      border-bottom: 1px solid #ffa9e7;
      padding: 10px 0 10px 0;
    }
  }

  .flex-div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
  }
`

export default Main
