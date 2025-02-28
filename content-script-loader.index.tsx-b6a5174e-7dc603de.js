(function () {
  'use strict';

  (async () => {
    await import(
      /* @vite-ignore */
      chrome.runtime.getURL("assets/index.tsx-b6a5174e.js")
    );
  })().catch(console.error);

})();
