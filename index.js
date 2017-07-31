const box = document.getElementById('text')
const saved = document.getElementById('saved')
const loading = document.getElementById('loading')

// ----- ON LOAD -----

loading.classList.add('hidden')

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

// ----- WORKER -----
if ('serviceWorker' in navigator) {
  console.log('CLIENT: service worker registration in progress.')

  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('CLIENT: service worker registration complete.'))
    .catch(() => console.log('CLIENT: service worker registration failure.'))
} else {
  console.log('CLIENT: service worker is not supported.')
}
