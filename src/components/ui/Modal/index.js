import React from 'react'

import ModalContent from './components/ModalContent'
import ModalContainer from './components/ModalContainer'
import Overlay from './components/Overlay'

const noOp = () => {}

const Modal = ({ show, onClose = noOp, children }) =>
  <div>
    <ModalContainer show={show}>
      <ModalContent show={show}>
        {children}
      </ModalContent>
    </ModalContainer>

    <Overlay show={show} onClick={onClose} />
  </div>

export default Modal
