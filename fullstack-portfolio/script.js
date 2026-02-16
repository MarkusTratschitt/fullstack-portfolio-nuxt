(() => {
  const track = document.querySelector('.carousel__track');
  const slides = Array.from(document.querySelectorAll('.card'));
  const prevBtn = document.querySelector('.carousel__arrow--prev');
  const nextBtn = document.querySelector('.carousel__arrow--next');
  const stickyNav = document.querySelector('.carousel__sticky-nav');
  const viewport = document.querySelector('.carousel__viewport');

  if (!track || !slides.length || !stickyNav) return;

  let activeIndex = 0;

  const dots = slides.map((slide, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'carousel__dot';
    btn.textContent = slide.dataset.label || `Item ${index + 1}`;
    btn.addEventListener('click', () => goTo(index));
    stickyNav.appendChild(btn);
    return btn;
  });

  const normalize = (i) => (i + slides.length) % slides.length;

  const render = () => {
    track.style.transform = `translateX(-${activeIndex * 100}%)`;

    slides.forEach((slide, index) => {
      const isActive = index === activeIndex;
      slide.classList.toggle('is-active', isActive);
      slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
    });

    dots.forEach((dot, index) => {
      const isCurrent = index === activeIndex;
      dot.classList.toggle('is-current', isCurrent);
      dot.setAttribute('aria-current', isCurrent ? 'true' : 'false');
    });
  };

  const goTo = (index) => {
    activeIndex = normalize(index);
    render();
  };

  prevBtn?.addEventListener('click', () => goTo(activeIndex - 1));
  nextBtn?.addEventListener('click', () => goTo(activeIndex + 1));

  const onKey = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(activeIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(activeIndex + 1);
    }
  };

  document.addEventListener('keydown', onKey);
  viewport?.addEventListener('keydown', onKey);

  render();
})();
