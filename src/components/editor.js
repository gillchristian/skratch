import { h, Component } from 'preact'
import styled from 'styled-components'

import storage from '../services/storage'

const Badge = styled.span`
  color: black;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.15);
`

const Textarea = styled.textarea`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 20px;
  border: none;
  color: white;
  background-color: #356c5d;

  &:focus {
    outline: none;
  }
`

export default class Editor extends Component {
  state = {
    value: storage.getItem('scratch-content') || '',
    showBadge: false,
    isWritting: false,
  }

  handleInput = e => {
    this.setState({ value: e.target.value, isWritting: true })

    this.persistContent()
  }

  persistContent = () => {
    clearTimeout(this.timer)

    const timer = setTimeout(() => {
      this.setState({ isWritting: false, showBadge: true })

      storage.setItem('scratch-content', this.state.value)

      setTimeout(() => {
        this.setState({ showBadge: false })
      }, 1500)
    }, 1500)

    this.timer = timer
  }

  bindTextarea = x => {
    this.textarea = x
  }

  componentDidMount() {
    this.textarea.focus()
  }

  render(_, { value, showBadge }) {
    return (
      <div>
        <Textarea innerRef={this.bindTextarea} onChange={this.handleInput}>
          {value}
        </Textarea>
        {showBadge && <Badge>Saved!</Badge>}
      </div>
    )
  }
}
