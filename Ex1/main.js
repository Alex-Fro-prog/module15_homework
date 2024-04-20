const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
  document.querySelector('.bi-arrow-down-left-circle').classList.toggle('hidden');
  document.querySelector('.bi-arrow-down-left-circle-fill').classList.toggle('hidden');
});