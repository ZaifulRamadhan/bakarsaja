import 'regenerator-runtime';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

registerRoute(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/list'),
  new CacheFirst({
    cacheName: 'example-cache',
  }),
);
registerRoute(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/small/'),
  new CacheFirst({
    cacheName: 'images-canges',
  }),
);

registerRoute(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/list'),
  new CacheFirst({
    cacheName: 'example-cache',
  }),
);

registerRoute(
  ({ url }) => url.href.startsWith('https://restaurant-api.dicoding.dev/images/small/'),
  new CacheFirst({
    cacheName: 'images-cache',
  }),
);

self.addEventListener('fetch', (event) => {
  // Handle fetch request with caching
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request).then((fetchResponse) => caches.open('dynamic-cache').then((cache) => {
      cache.put(event.request.url, fetchResponse.clone());
      return fetchResponse;
    }))),
  );
});
