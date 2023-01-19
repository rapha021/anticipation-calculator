import styled from "styled-components"

export const Input = styled.input`
  width: 245px;
  height: 40px;

  background-color: #2a2d43;
  color: #fff;

  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 6px;

  outline: none;

  transition: all 300ms;

  padding: 0;
  margin: 0;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:hover {
    border-color: #ff84e8;
  }

  &:focus {
    border-color: #ff84e8;
  }
`
