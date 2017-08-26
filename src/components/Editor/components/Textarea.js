import React from 'react'
import styled from 'styled-components'

import storage from '../../../services/storage'

import Badge from './Badge'
import PersistContent from '../containers/PersistContent'

const Textarea = styled.textarea`
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 20px;
  border: none;
  color: white;
  background-color: #00897b;

  &:focus {
    outline: none;
  }
`

class EditorWrapper extends React.Component {
  state = {
    text: storage.getItem('scratch-content') || '',
  }

  componentDidMount() {
    this.editor.focus()
  }

  onChange = persistContent => e => {
    this.setState({ text: e.target.value })
    persistContent()
  }

  getContent = () => this.state.text

  render() {
    const { text } = this.state

    return (
      <PersistContent name="scratch-content" getContent={this.getContent}>
        {({ justSaved, persistContent }) =>
          <div onClick={() => this.editor.focus()}>
            <Textarea
              onChange={this.onChange(persistContent)}
              innerRef={element => {
                this.editor = element
              }}
            >
              {text}
            </Textarea>
            {justSaved && <Badge>Saved!</Badge>}
          </div>}
      </PersistContent>
    )
  }
}

export default EditorWrapper
