import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 5px 0;
  margin: 5px 10px;
  width: 150px;
  background: transparent;
  color: white;
  border: 2px solid white;

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
`
export default Button
