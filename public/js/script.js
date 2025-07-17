/* Header Start  ------------------------------------------------------------------------------ */
function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
    document.getElementById("overlay").classList.toggle("active");
  }

  const slides = document.getElementById('slides');
  const totalSlides = slides.children.length;
  let index = 0;

/* Header End  ------------------------------------------------------------------------------ */
/* Main Start  ------------------------------------------------------------------------------ */
  function updateSlide() {
    const offset = index * (slides.children[0].offsetWidth + 1); // slide width + margin
    slides.style.transform = `translateX(-${offset}px)`;
  }

  document.querySelector('.arrow.left').addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
  });

  document.querySelector('.arrow.right').addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateSlide();
  });

  // Initial call
  updateSlide();

/* Main End ------------------------------------------------------------------------------ */

const sections = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    } else {
      entry.target.classList.remove('is-visible');
    }
  });
}, {
  threshold: 0.1 // فقط کافیه 10% از عنصر توی صفحه دیده بشه
});

sections.forEach(section => {
  observer.observe(section);
});