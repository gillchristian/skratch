import React from 'react'

import storage from './services/storage'
import Editor from './components/Editor'
import Modal from './components/ui/Modal'
import Help from './components/Help'
import Badge from './components/ui/Badge'

const HelpBadge = Badge.extend`
  position: fixed;
  bottom: 0;
  right: 0;
  cursor: pointer;
`

class App extends React.Component {
  state = {
    showModal: false,
    greet: false,
  }

  componentDidMount() {
    const greet = !(storage.getItem('skratch-should-greet') === 'false')

    greet && storage.setItem('skratch-should-greet', false)

    // show the modal 1s after the page loads
    setTimeout(() => {
      this.setState({ showModal: greet, greet })
    }, 1000)
  }

  closeModal = () => this.setState({ showModal: false })

  openModal = () => this.setState({ showModal: true })

  render() {
    return (
      <div>
        <Editor />

        <Modal show={this.state.showModal} onClose={this.closeModal}>
          <Help close={this.closeModal} showGreet={this.state.greet} />
        </Modal>

        <HelpBadge onClick={this.openModal}>Help!</HelpBadge>
      </div>
    )
  }
}

export default App
