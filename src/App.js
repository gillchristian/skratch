import React from 'react'
import styled from 'styled-components'

import Editor from './components/Editor'
import Modal from './components/Modal'
import Badge from './components/ui/Badge'
import Link from './components/ui/Link'
import Flex from './components/ui/Flex'

const HelpBadge = Badge.extend`
  position: fixed;
  bottom: 0;
  right: 0;
  cursor: pointer;
`
const ModalContent = styled.div`
  color: #fff;
  background: #e74c3c;
  position: relative;
  border-radius: 3px;
  margin: 0 auto;
`

const Heading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.25);
`

const Body = styled.div`padding: 15px;`

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

const Help = () =>
  <ModalContent>
    <Heading>
      <h2>skratch</h2>
    </Heading>

    <Body>
      <p>
        Skratch is a minimalistic notes app that aims to be as simple as
        possible Just like taking a peace of paper, writting some notes and
        throwing it away after you've used it but not hurting the trees.
      </p>

      <Flex justify="end">
        <Button onClick={this.closeModal}>close</Button>
      </Flex>
    </Body>

    <Heading>
      <h4>
        {'</> with <3'}{' '}
        <Link to="https://gillchristian.xyz/about-me" blank>
          gillchristian
        </Link>
      </h4>
    </Heading>
  </ModalContent>

class App extends React.Component {
  state = {
    showModal: false,
  }

  closeModal = () => this.setState({ showModal: false })

  openModal = () => this.setState({ showModal: true })

  render() {
    return (
      <div>
        <Editor />

        <Modal show={this.state.showModal} onClose={this.closeModal}>
          <Help />
        </Modal>

        <HelpBadge onClick={this.openModal}>Help!</HelpBadge>
      </div>
    )
  }
}

export default App
