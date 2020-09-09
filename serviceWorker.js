const Weatherapp = "ufon weather app"
const assets = [
    "/",
    "index.html",
    "style.css",
    "app.js",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/",
    "assets/space-noise-procreate-brush-set_4x.jpg"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
      caches.open(Weatherapp).then(cache => {
        cache.addAll(assets)
      })
    )
  })

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

  //   // service-worker.js
  self.addEventListener('install', function() {
    console.log('Install!');
  });
  self.addEventListener("activate", event => {
    console.log('Activate!');
  });
  self.addEventListener('fetch', function(event) {
    console.log('Fetch!', event.request);
  });