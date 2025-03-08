// Add any interactive JavaScript here
// Example: Scroll-triggered animations
window.addEventListener('scroll', () => {
  const content = document.querySelector('.content');
  const contentPosition = content.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (contentPosition < screenPosition) {
    content.style.opacity = '1';
    content.style.transform = 'translateX(0)';
  }
});