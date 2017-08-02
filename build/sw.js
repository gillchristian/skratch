"use strict";
function setOfCachedUrls(e) {
  return e
    .keys()
    .then(function(e) {
      return e.map(function(e) {
        return e.url;
      });
    })
    .then(function(e) {
      return new Set(e);
    });
}
var precacheConfig = [
    ["/assets/favicon.ico", "8244b1aadb73b999c6987ac42039e8a8"],
    [
      "/assets/icons/android-icon-144x144.png",
      "9bfb36a30f6cd163e7f3b80409d2a047"
    ],
    [
      "/assets/icons/android-icon-192x192.png",
      "8e5a4a0b0cbae60341f7e49d299fd635"
    ],
    [
      "/assets/icons/android-icon-36x36.png",
      "b5818c9ee10f4f15d638cf1c0b8e2c53"
    ],
    [
      "/assets/icons/android-icon-48x48.png",
      "edc9a820a661b0bfa9cf93d75254f7b4"
    ],
    [
      "/assets/icons/android-icon-72x72.png",
      "a8f024aeabd9a0c120e1b29dfaf9c019"
    ],
    [
      "/assets/icons/android-icon-96x96.png",
      "95bb80e8b699d0694c681594cbc1054c"
    ],
    [
      "/assets/icons/apple-icon-114x114.png",
      "d7b31346cf31b98fc32f43285108b638"
    ],
    [
      "/assets/icons/apple-icon-120x120.png",
      "5f3f3e8546bbd5cccfe6263f7afce602"
    ],
    [
      "/assets/icons/apple-icon-144x144.png",
      "9bfb36a30f6cd163e7f3b80409d2a047"
    ],
    [
      "/assets/icons/apple-icon-152x152.png",
      "7d51b7a8883ec6df94838ca313035720"
    ],
    [
      "/assets/icons/apple-icon-180x180.png",
      "b2a41d9f3a6832aac1c3186ecf921bd8"
    ],
    ["/assets/icons/apple-icon-57x57.png", "e245a68f8de1648e533daa84d889ea4a"],
    ["/assets/icons/apple-icon-60x60.png", "db8d9b09fa68f68a6f287bd33a67e7e4"],
    ["/assets/icons/apple-icon-72x72.png", "a8f024aeabd9a0c120e1b29dfaf9c019"],
    ["/assets/icons/apple-icon-76x76.png", "2ed853c2bf93423876eabb2cba85ad67"],
    [
      "/assets/icons/apple-icon-precomposed.png",
      "0924b80850a0e290fb3a2a9f112934b4"
    ],
    ["/assets/icons/apple-icon.png", "0924b80850a0e290fb3a2a9f112934b4"],
    ["/assets/icons/favicon-16x16.png", "769cc0a765257435f90f51dcf2cbc652"],
    ["/assets/icons/favicon-32x32.png", "3a89c5834ae6d1e6e65c4d4e4ffe57bd"],
    ["/assets/icons/favicon-96x96.png", "95bb80e8b699d0694c681594cbc1054c"],
    ["/assets/icons/ms-icon-144x144.png", "9bfb36a30f6cd163e7f3b80409d2a047"],
    ["/assets/icons/ms-icon-150x150.png", "5d6c271d6291f900848ab86261bfd338"],
    ["/assets/icons/ms-icon-310x310.png", "4e8dedf1956d6ec1d757ac501b40c464"],
    ["/assets/icons/ms-icon-70x70.png", "8f2f3d08cbe393cd6984f8814e02039f"],
    ["/bundle.a1234.js", "e8eb9123a6213bd0482a342a96313290"],
    ["/favicon.ico", "8244b1aadb73b999c6987ac42039e8a8"],
    ["/index.html", "e3fa20cd6264a27a39420a0e3947e7dd"],
    ["/manifest.json", "fb4961f51644a4953845c9c452563fc8"],
    ["/style.72972.css", "f7f9ab98594d1e5e7b585b26ddb0b4db"]
  ],
  cacheName =
    "sw-precache-v3-sw-precache-webpack-plugin-" +
    (self.registration ? self.registration.scope : ""),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function(e, n) {
    var a = new URL(e);
    return "/" === a.pathname.slice(-1) && (a.pathname += n), a.toString();
  },
  cleanResponse = function(e) {
    return e.redirected
      ? ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function(n) {
          return new Response(n, {
            headers: e.headers,
            status: e.status,
            statusText: e.statusText
          });
        })
      : Promise.resolve(e);
  },
  createCacheKey = function(e, n, a, s) {
    var t = new URL(e);
    return (s && t.pathname.match(s)) ||
      (t.search +=
        (t.search ? "&" : "") +
        encodeURIComponent(n) +
        "=" +
        encodeURIComponent(a)), t.toString();
  },
  isPathWhitelisted = function(e, n) {
    if (0 === e.length) return !0;
    var a = new URL(n).pathname;
    return e.some(function(e) {
      return a.match(e);
    });
  },
  stripIgnoredUrlParameters = function(e, n) {
    var a = new URL(e);
    return (a.hash = ""), (a.search = a.search
      .slice(1)
      .split("&")
      .map(function(e) {
        return e.split("=");
      })
      .filter(function(e) {
        return n.every(function(n) {
          return !n.test(e[0]);
        });
      })
      .map(function(e) {
        return e.join("=");
      })
      .join("&")), a.toString();
  },
  hashParamName = "_sw-precache",
  urlsToCacheKeys = new Map(
    precacheConfig.map(function(e) {
      var n = e[0],
        a = e[1],
        s = new URL(n, self.location),
        t = createCacheKey(s, hashParamName, a, !1);
      return [s.toString(), t];
    })
  );
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function(e) {
        return setOfCachedUrls(e).then(function(n) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function(a) {
              if (!n.has(a)) {
                var s = new Request(a, { credentials: "same-origin" });
                return fetch(s).then(function(n) {
                  if (!n.ok)
                    throw new Error(
                      "Request for " +
                        a +
                        " returned a response with status " +
                        n.status
                    );
                  return cleanResponse(n).then(function(n) {
                    return e.put(a, n);
                  });
                });
              }
            })
          );
        });
      })
      .then(function() {
        return self.skipWaiting();
      })
  );
}), self.addEventListener("activate", function(e) {
  var n = new Set(urlsToCacheKeys.values());
  e.waitUntil(
    caches
      .open(cacheName)
      .then(function(e) {
        return e.keys().then(function(a) {
          return Promise.all(
            a.map(function(a) {
              if (!n.has(a.url)) return e.delete(a);
            })
          );
        });
      })
      .then(function() {
        return self.clients.claim();
      })
  );
}), self.addEventListener("fetch", function(e) {
  if ("GET" === e.request.method) {
    var n,
      a = stripIgnoredUrlParameters(e.request.url, ignoreUrlParametersMatching);
    (n = urlsToCacheKeys.has(a)) ||
      ((a = addDirectoryIndex(a, "index.html")), (n = urlsToCacheKeys.has(a)));
    !n &&
      "navigate" === e.request.mode &&
      isPathWhitelisted(["^(?!\\/__).*"], e.request.url) &&
      (
        (a = new URL("index.html", self.location).toString()),
        (n = urlsToCacheKeys.has(a))
      ), n &&
      e.respondWith(
        caches
          .open(cacheName)
          .then(function(e) {
            return e.match(urlsToCacheKeys.get(a)).then(function(e) {
              if (e) return e;
              throw Error("The cached response that was expected is missing.");
            });
          })
          .catch(function(n) {
            return console.warn(
              'Couldn\'t serve response for "%s" from cache: %O',
              e.request.url,
              n
            ), fetch(e.request);
          })
      );
  }
});
