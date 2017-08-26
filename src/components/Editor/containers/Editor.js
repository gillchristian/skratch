import React from 'react'
import R from 'ramda'

import Editor from '../components/Editor'
import Textarea from '../components/Textarea'

const isAndroid = R.contains('Android', R.prop('userAgent', navigator))

export default () => (isAndroid ? <Textarea /> : <Editor />)
