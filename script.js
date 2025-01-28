document.addEventListener('wheel', (event) => {
  event.preventDefault();
}, { passive: false });

document.addEventListener('touchstart', (event) => {
  event.preventDefault();
}, { passive: false });

document.addEventListener('touchmove', (event) => {
  event.preventDefault();
}, { passive: false });

document.addEventListener('touchend', (event) => {
  event.preventDefault();
}, { passive: false });