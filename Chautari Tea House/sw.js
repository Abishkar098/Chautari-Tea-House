const V = "chautari-v3";
const FILES = [
  "./",
  "./index.html",
  "./menu.html",
  "./qr.html",
  "./style.css",
  "./menu-data.js",
  "./manifest.json",
  "./images/logo.JPG",
  "./images/icon-192.png",
  "./images/icon-512.png",
  "./images/menu-qr.svg",
  "./images/IMG_1399.jpg",
  "./images/IMG_1400.jpg",
  "./images/IMG_0792.jpg",
  "./images/IMG_0793.jpg",
  "./images/tab-tea.jpg",
  "./images/tab-brews.jpg",
  "./images/tab-coffee.jpg",
  "./images/tab-cold.jpg",
  "./images/tab-snacks.jpg",
  "./images/tab-hookah.jpg"
];
self.addEventListener("install", function (e) {
  // Cache each file on its own, so one missing file no longer blocks the whole install.
  e.waitUntil(caches.open(V).then(function (c) {
    return Promise.all(FILES.map(function (f) { return c.add(f).catch(function () {}); }));
  }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== V; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // fonts, maps and other sites go straight to the network
  e.respondWith(fetch(req).then(function (res) {
    if (res.ok) {
      const copy = res.clone();
      caches.open(V).then(function (c) { c.put(req, copy); }).catch(function () {});
    }
    return res;
  }).catch(function () {
    return caches.match(req, { ignoreSearch: true }).then(function (hit) {
      if (hit) return hit;
      // Only fall back to the homepage for page loads, never for images or scripts.
      return req.mode === "navigate" ? caches.match("./index.html") : Response.error();
    });
  }));
});
