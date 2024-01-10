importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');
 
console.log('Yay ! Worbox is loaded');

const {ExpirationPlugin}     = workbox.expiration;
const {registerRoute}        = workbox.routing;
const {StaleWhileRevalidate} = workbox.strategies;
const {CacheableResponsePlugin} = workbox.cacheableResponse;
const {CacheFirst}              = workbox.strategies;

registerRoute(
    ({url}) =>  url.origin === 'https://fonts.googleapis.com' ||
                url.origin === 'https://fonts.gstatic.com',
    new StaleWhileRevalidate({
      cacheName: 'google-fonts',
      plugins: [
        new ExpirationPlugin({maxEntries: 20}),
      ],
    }),
  );

registerRoute(
    ({request}) => request.destination === 'document'||
                   request.destination === 'script'  ||
                   request.destination === 'style',      
    new StaleWhileRevalidate({cacheName: 'files-cache'})
  );

  registerRoute(
    ({request}) => request.destination === 'image',
    new CacheFirst({
        cacheName: 'images',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 10,
            }),
        ],
    }),
  );