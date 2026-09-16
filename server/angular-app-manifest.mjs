
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/Home"
  },
  {
    "renderMode": 2,
    "route": "/Contact"
  },
  {
    "renderMode": 2,
    "route": "/About"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 758, hash: '99e56adbcdda2cdb4ba895ae7e7099b7820c8984b09e462a054160aa4f1361c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '0cd983f8a5415b60fb8f1a3bb65fafe105868a39ef1dd6bbf5278f661500f906', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Home/index.html': {size: 13220, hash: 'b4574b666d1f2550bfadab7718e7beee690974a14fb226da85a3aa9cc44eb825', text: () => import('./assets-chunks/Home_index_html.mjs').then(m => m.default)},
    'Contact/index.html': {size: 12493, hash: '9bb7710829209829afe6414b5d453368be211fa8f31e8fd59e39902193376d44', text: () => import('./assets-chunks/Contact_index_html.mjs').then(m => m.default)},
    'About/index.html': {size: 15282, hash: '43b316dfc25189ecccdec626f05113fb06a89f888fb5c1325bb0ce0f9143fc55', text: () => import('./assets-chunks/About_index_html.mjs').then(m => m.default)},
    'styles-55HY4GSZ.css': {size: 138, hash: 'Zjt++iwdRHY', text: () => import('./assets-chunks/styles-55HY4GSZ_css.mjs').then(m => m.default)}
  },
};
