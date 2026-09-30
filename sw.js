const C = 'olcek-defteri-v1';
const SHELL = ['./', './index.html', './firebase-config.js', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);
  if (u.hostname.endsWith('googleapis.com') || u.hostname.includes('firebase')) return;
  const cdn = u.hostname === 'cdnjs.cloudflare.com' || u.hostname === 'www.gstatic.com' || u.hostname.startsWith('fonts.');
  const put = res => { if (res && (res.ok || res.type === 'opaque')) { const cp = res.clone(); caches.open(C).then(c => c.put(e.request, cp)); } return res; };
  if (cdn) { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(put))); return; }
  if (u.origin === location.origin) e.respondWith(fetch(e.request).then(put).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
});
