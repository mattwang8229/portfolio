// mobile nav toggle
(function(){
  const btn = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#menu');
  if(btn && menu){
    btn.addEventListener('click', () => {
      const ex = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!ex));
      menu.classList.toggle('open');
    });
  }
})();

// toggle "Show more" / "Show less" on details
document.querySelectorAll('.xp-more').forEach(d => {
  const label = d.querySelector('summary .label');
  if (!label) return;
  d.addEventListener('toggle', () => {
    label.textContent = d.open ? 'Show less' : 'Show more';
  });
});
