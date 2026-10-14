document.querySelectorAll('.alex-flip').forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.detail > 0 && window.matchMedia('(hover: hover)').matches) return;
    const flipped = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed', String(flipped));
  });
});
