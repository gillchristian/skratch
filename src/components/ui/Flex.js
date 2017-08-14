import R from 'ramda'
import styled from 'styled-components'

const flexProps = R.cond([
  [R.equals('start'), () => 'flex-start'],
  [R.equals('end'), () => 'flex-end'],
  [R.equals('between'), () => 'space-between'],
  [R.equals('around'), () => 'space-around'],
  [R.equals('center'), () => 'center'],
  [R.T, () => 'flex-start'],
])

const justify = R.compose(flexProps, R.prop('justify'))

const align = R.compose(flexProps, R.prop('align'))

const width = R.compose(
  R.ifElse(R.isNil, R.always('100%'), R.when(R.is(Number), v => `${v}px`)),
  R.prop('width'),
)

const height = R.compose(
  R.ifElse(R.isNil, R.always('auto'), R.when(R.is(Number), v => `${v}px`)),
  R.prop('height'),
)

const direction = R.cond([
  [R.prop('col'), () => 'column'],
  [R.prop('row'), () => 'row'],
  [R.prop('colR'), () => 'column-reverse'],
  [R.prop('rowR'), () => 'row-reverse'],
  [R.T, () => 'row'],
])

export default styled.div`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
  flex-wrap: ${p => (p.wrap ? 'wrap' : p.wrapR ? 'wrap-reverse' : 'nowrap')};

  width: ${width};
  height: ${height};
`
