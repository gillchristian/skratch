import React from 'react'
import {
  Editor,
  EditorState,
  ContentState,
  RichUtils,
  CompositeDecorator,
  getDefaultKeyBinding,
  KeyBindingUtil,
} from 'draft-js'

import storage from '../../../services/storage'
import withProps from '../../../hocs/withProps'
import Link from '../../ui/Link'

import PersistContent from '../containers/PersistContent'
import EditorBackground from './EditorBackground'
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

    const text = storage.getItem('scratch-content') || ''
    const contet = ContentState.createFromText(text)
    const editorState = EditorState.createWithContent(contet, decorator)

    this.state = {
      editorState,
      isOverALink: false,
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

  onChange = persistContent => editorState => {
    this.setState({ editorState })
    persistContent()
  }

  getContent = () => this.state.editorState.getCurrentContent().getPlainText()

  // TODO: only handle non-visual (i.e. bold) commands
  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)

    console.log({ command })

    if (newState) {
      switch (command) {
        case 'move-up':
        case 'move-down':
          return 'handled'
        default:
          this.onChange(newState)
          return 'handled'
      }
    }

    return 'not-handled'
  }

  keyBindingFn = e => {
    console.log({ keyCode: e.keyCode, key: e.key })

    // arrow left  -> 37
    if (e.keyCode === 37 && (e.ctrlKey || e.cmdKey) && !e.altKey) {
      return 'arrow-left'
    }

    // arrow up    -> 38
    if (e.keyCode === 38 && (e.ctrlKey || e.cmdKey) && !e.altKey) {
      return 'move-up'
    }

    // arrow right -> 39
    if (e.keyCode === 39 && (e.ctrlKey || e.cmdKey) && !e.altKey) {
      return 'arrow-right'
    }

    // arrow down  -> 40
    if (e.keyCode === 40 && (e.ctrlKey || e.cmdKey) && !e.altKey) {
      return 'move-down'
    }

    return getDefaultKeyBinding(e)
  }

  render() {
    const { isOverALink, editorState } = this.state
    return (
      <PersistContent name="scratch-content" getContent={this.getContent}>
        {({ justSaved, persistContent }) => (
          <div>
            <EditorBackground onClick={() => this.editor.focus()}>
              <Editor
                readOnly={isOverALink}
                editorState={editorState}
                onChange={this.onChange(persistContent)}
                handleKeyCommand={this.handleKeyCommand}
                keyBindingFn={this.keyBindingFn}
                ref={element => {
                  this.editor = element
                }}
              />
            </EditorBackground>
            {justSaved && <Badge>Saved!</Badge>}
          </div>
        )}
      </PersistContent>
    )
  }
}

export default EditorWrapper
