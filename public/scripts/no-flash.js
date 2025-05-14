// IIFE - To avoid flash of default theme: light
(function () {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('dark');
  }
})();
