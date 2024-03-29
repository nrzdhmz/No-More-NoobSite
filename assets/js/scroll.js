const swiper = new Swiper('.sample-slider', {
  loop: true,
  autoplay: {
      delay: 3000,
  },
  speed: 3000,
  slidesPerView: 2,
  breakpoints: {
    767: {
      slidesPerView: 5
    }
  }
});

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY > 600) {
    header.classList.add('fixedHeader');
    header.style.top = "0";
  } else {
    header.classList.remove('fixedHeader');
    header.style.top = "-100px"; 
  } 
});


// 

const messageTextarea = document.getElementById('message');
const messageLabel = document.getElementById('messageLabel');
const writeLabel = document.getElementById('write');

messageTextarea.addEventListener('input', () => {
  const message = messageTextarea.value.trim();
  if (message === '') {
    messageLabel.style.display = 'block';
    writeLabel.style.display = 'none';
  } else {
    messageLabel.style.display = 'none';
    writeLabel.style.display = 'block';
  }
});


// 
function toggleStickyMenu() {
  var stickyNav = document.getElementById('sticky');
  if (stickyNav.style.display === 'none') {
    stickyNav.style.display = 'flex';
  } else {
    stickyNav.style.display = 'none';
  }
}