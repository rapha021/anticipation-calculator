import styled from "styled-components"

export const Input = styled.input`
  width: 240px;
  height: 30px;

  background-color: #2a2d43;
  color: #fff;

  border: 1px solid gray;
  border-radius: 3px;

  &:hover {
    border-color: #ff84e8;
  }

  &:focus {
    border-color: #ff84e8;
    outline: 1px solid #ff84e8;
  }
`
