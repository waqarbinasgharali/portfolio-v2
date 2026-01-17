
document.addEventListener('DOMContentLoaded', function(){
  // set active link based on filename
  const links = document.querySelectorAll('.side-nav a');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path) a.classList.add('active');
  });

  // simple reveal
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach(el => { el.style.opacity = 0; el.style.transform = 'translateY(12px)'; el.style.transition = 'opacity 700ms ease, transform 700ms ease'; });
  const onScroll = () => {
    reveals.forEach(el => {
      const r = el.getBoundingClientRect();
      if(r.top < window.innerHeight - 80){
        el.style.opacity = 1; el.style.transform = 'translateY(0)';
      }
    });
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
});

