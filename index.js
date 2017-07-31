const box = document.getElementById('text')
const saved = document.getElementById('saved')

// ON LOAD
box.value = localStorage.getItem('scratch-content')
box.focus()

// ---------------------

function saveContent() {
  localStorage.setItem('scratch-content', box.value)

  displayAlert(saved, 1000)
}

box.addEventListener('keyup', throttle(saveContent, 1000, box))

function displayAlert(el, delay) {
  el.classList.remove('hidden')

  setTimeout(() => {
    el.classList.add('hidden')
  }, delay)
}

// ----- HELPERS ----

function throttle(callback, wait, context = this) {
  let timeout = null 
  let callbackArgs = null
  
  const later = () => {
    callback.apply(context, callbackArgs)
    timeout = null
  }
  
  return function() {
    if (!timeout) {
      callbackArgs = arguments
      timeout = setTimeout(later, wait)
    }
  }
}
