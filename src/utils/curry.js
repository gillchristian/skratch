// curry :: (a -> b -> c) -> (a -> (b -> c))
const curry = fn => (...args) =>
  args.length === fn.length ? fn(...args) : curry(fn.bind(null, ...args))

export default curry
