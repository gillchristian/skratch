'use strict'

console.log('WORKER: executing.')

const VERSION = 'v1'

const offlineAssets = [
  '',
  'index.js',
  'index.css',
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
