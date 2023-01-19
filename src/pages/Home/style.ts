import styled from "styled-components"

const Main = styled.section`
  width: 70%;
  max-width: 645px;

  height: 430px;

  background-color: #414361;
  border-radius: 20px;
  box-shadow: 0px 0px 61px 38px rgba(0, 0, 0, 0.1);

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

    .error-msg {
      color: red;
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
  }

  .results {
    height: 100%;
    width: 40%;

    background-color: #1d1e2c;
    border-radius: 0 20px 20px 0;

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

  @media (max-width: 925px) {
    height: 800px;

    flex-direction: column;

    .form-fields {
      width: 90%;
    }

    .results {
      width: 100%;
      border-radius: 0 0 20px 20px;
    }

    .flex-div {
      align-items: center;
      padding: 0 0 0 0;
    }
  }

  @media (max-width: 550px) {
    width: 90%;
  }
`

export default Main
