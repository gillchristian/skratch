import styled from 'styled-components'

const ModalContent = styled.div`
  transition: all 0.3s;

  transform: ${p => (p.show ? 'translateY(0)' : 'translateY(50%)')};
  opacity: ${p => (p.show ? 1 : 0)};
`

export default ModalContent
