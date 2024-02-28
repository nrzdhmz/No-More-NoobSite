const swiper = new Swiper('.sample-slider', {
  loop: true,
  autoplay: {
      delay: 3000,
  },
  speed: 3000,
  slidesPerView: 5,
})

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY > 600) {
    header.classList.add('fixedHeader');
    header.style.top = "0"; // Show the fixed header
  } else {
    header.classList.remove('fixedHeader');
    header.style.top = "-100px"; // Hide the fixed header
  }
});