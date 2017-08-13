import React from 'react'
import styled from 'styled-components'
import {
  Editor,
  EditorState,
  RichUtils,
  CompositeDecorator,
  convertToRaw,
  convertFromRaw,
} from 'draft-js'

import storage from '../../../services/storage'
import withProps from '../../../hocs/withProps'
import tryCatch from '../../../utils/tryCatch'
import Link from '../../ui/Link'

import Textarea from './Textarea'
import Badge from './Badge'

// TODO: make this method more functional
function findWithRegex(regex, contentBlock, callback) {
  const text = contentBlock.getText()
  let matchArr = regex.exec(text)
  let start

  while (matchArr !== null) {
    start = matchArr.index
    callback(start, start + matchArr[0].length)

    matchArr = regex.exec(text)
  }
}

// TODO: improve the link & email matching
const linkRgx = /https?:\/\/\S+\.\S{2,}/g
const emailRgx = /\S+@\S+\.\S{2,}/g

function findEmailEntities(contentBlock, callback, contentState) {
  findWithRegex(emailRgx, contentBlock, callback)
}

function findLinkEntities(contentBlock, callback, contentState) {
  findWithRegex(linkRgx, contentBlock, callback)
}

class EditorWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.disableEdit = this.disableEdit.bind(this)
    this.enableEdit = this.enableEdit.bind(this)

    const linkDecorator = {
      strategy: findLinkEntities,
      component: withProps(p => ({
        onMouseEnter: this.disableEdit,
        onMouseLeave: this.enableEdit,
        target: '_blank',
        // children gets passed an array of React components
        // with one component containing the text
        // which is the href of the link
        href: p.children[0].props.text,
      }))(Link),
    }

    const emailDecorator = {
      strategy: findEmailEntities,
      component: withProps(p => ({
        onMouseEnter: this.disableEdit,
        onMouseLeave: this.enableEdit,
        // children gets passed an array of React components
        // with one component containing the text
        // which is the href of the link
        href: `mailto:${p.children[0].props.text}`,
      }))(Link),
    }

    const decorator = new CompositeDecorator([linkDecorator, emailDecorator])

    const stored = storage.getItem('scratch-content')
    const raw = tryCatch(JSON.parse, () => false, stored)
    const editorState = raw
      ? EditorState.createWithContent(convertFromRaw(raw), decorator)
      : EditorState.createEmpty(decorator)

    this.state = {
      editorState,
      isOverALink: false,
      isWritting: false,
      showBadge: false,
    }
  }

  componentDidMount() {
    this.editor.focus()
  }

  disableEdit() {
    this.setState({ isOverALink: true })
  }

  enableEdit() {
    this.setState({ isOverALink: false })
    setTimeout(() => this.editor.focus(), 0)
  }

  onChange = editorState => {
    this.setState({ editorState, isWritting: true })
    this.persistContent()
  }

  // saves the content to localStorage everytime the user stops typing for 500ms
  persistContent = () => {
    clearTimeout(this.timer)

    const timer = setTimeout(() => {
      this.setState({ isWritting: false, showBadge: true })

      const raw = convertToRaw(this.state.editorState.getCurrentContent())

      storage.setItem('scratch-content', JSON.stringify(raw))

      setTimeout(() => {
        this.setState({ showBadge: false })
      }, 1500)
    }, 500)

    this.timer = timer
  }

  // TODO: only handle non-visual (i.e. bold) commands
  handleKeyCommand = command => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)

    if (newState) {
      this.onChange(newState)
      return 'handled'
    }

    return 'not-handled'
  }

  render() {
    const { showBadge, isOverALink, editorState } = this.state
    return (
      <div>
        <Textarea onClick={() => this.editor.focus()}>
          <Editor
            readOnly={isOverALink}
            editorState={editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand}
            ref={element => {
              this.editor = element
            }}
          />
        </Textarea>
        {showBadge && <Badge>Saved!</Badge>}
      </div>
    )
  }
}

export default EditorWrapper
