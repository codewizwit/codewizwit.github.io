export function initRevealAnimations(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
) {
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length === 0) return;

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }
}
