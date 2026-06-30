const CACHE='igdi-v1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).catch(()=>{}));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
