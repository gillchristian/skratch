import React from 'react'

const withProps = (p = {}) => Component => ({ children, ...rest }) => {
  const props = typeof p === 'function' ? p({ children, ...rest }) : p

  return (
    <Component {...props} {...rest}>
      {children}
    </Component>
  )
}

export default withProps
