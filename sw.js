self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then(r => r || fetch(event.request)));
});
