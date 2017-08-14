import styled from 'styled-components'

const Link = styled.a.attrs({
  target: p => (p.blank ? '_blank' : p.target),
  href: p => p.to,
})`
  color: inherit;
  cursor: pointer;

  &:hover,
  &:link,
  &:active,
  &:visite {
    color: inherit;
  }
`

export default Link
