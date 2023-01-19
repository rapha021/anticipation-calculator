import styled from "styled-components"

const Button = styled.button`
  width: 245px;
  height: 40px;

  padding: 0;
  margin: 0;

  background-color: #ff84e8;
  border: 2px solid #ffa9e7;
  border-radius: 6px;
  color: #fff;

  transition: all 300ms;

  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #ff007f;
  }
`

export default Button
