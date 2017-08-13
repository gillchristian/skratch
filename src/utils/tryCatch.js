import curry from './curry'

// tryCatch :: (a -> b) -> (Error -> b) -> a -> b
const tryCatch = (tryFn, catchFn, v) => {
  try {
    return tryFn(v)
  } catch (e) {
    return catchFn(e)
  }
}

export default curry(tryCatch)
