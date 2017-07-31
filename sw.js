'use strict'

console.log('WORKER: executing.')

const VERSION = 'v1'

const offlineAssets = [
  './',
  './index.html',
  './index.js',
  './index.css',
]

self.addEventListener('install', (event) => {
  console.log('WORKER: install event in progress.')

  event.waitUntil(
    caches
    .open(`${VERSION}-assets`)
    .then((cache) => cache.addAll(offlineAssets))
    .then(() => {
      console.log('WORKER: install completed')
    })
  )

})

self.addEventListener('fetch', (event) => {
  console.log('WORKER: fetch event in progress.')

  if (event.request.method !== 'GET') {
    console.log(`WORKER: fetch event ignored: ${event.request.method} ${event.request.url}`)
    return
  }

  event.respondWith(
    caches
      .match(event.request)
      .then((cached) => {
        const networked = fetch(event.request)
          .then(fetchedFromNetwork(caches, event))
          .catch(unableToResolve)

        console.log(`WORKER: fetch event: ${cached ? '(cached)' : '(network)'} ${event.request.url}`)

        return cached || networked
      })
  )
})

self.addEventListener('activate', (event) => {
  console.log('WORKER: activate event in progress.')

  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => !key.startsWith(VERSION))
          .map((key) => caches.delete(key))
      ))
      .then(() => {
        console.log('WORKER: activate completed.')
      })
  )
})

// ----- HELPERS -----
function unableToResolve (e) {
  console.log(e)
  console.log('WORKER: fetch request failed in both cache and network.')

  return new Response('<h1>Service Unavailable</h1>', {
    status: 503,
    statusText: 'Service Unavailable',
    headers: new Headers({
      'Content-Type': 'text/html'
    })
  })
}

function fetchedFromNetwork(caches, event) {
  return (response) => {
    const cacheCopy = response.clone()

    console.log(`WORKER: fetch response from network: ${event.request.url}`)

    caches
      .open(`${VERSION}-pages`)
      .then((cache) => cache.put(event.request, cacheCopy))
      .then(() => {
        console.log(`WORKER: fetch response stored in cache: ${event.request.url}`)
      })
      .catch(() => {
        console.log(`WORKER: storing in cache failed for: ${event.request.url}`)
      })

    return response
  }
}
