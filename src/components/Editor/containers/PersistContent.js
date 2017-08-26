import React from 'react'
import PropTypes from 'prop-types'

import storage from '../../../services/storage'

class PersistContent extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    getContent: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    asJSON: PropTypes.bool,
    delay: PropTypes.number,
    showJustSaved: PropTypes.number,
  }

  static defaultProps = {
    asJSON: false,
    delay: 500,
    showJustSaved: 1500,
  }

  state = {
    justSaved: false,
  }

  persistContent = () => {
    const { name, getContent, showJustSaved, delay, asJSON } = this.props
    clearTimeout(this.timer)

    const timer = setTimeout(() => {
      this.setState({ justSaved: true })

      const content = asJSON ? JSON.stringify(getContent()) : getContent()

      storage.setItem(name, content)

      setTimeout(() => {
        this.setState({ justSaved: false })
      }, showJustSaved)
    }, delay)

    this.timer = timer
  }

  render() {
    return this.props.children({
      justSaved: this.state.justSaved,
      persistContent: this.persistContent,
    })
  }
}

export default PersistContent
