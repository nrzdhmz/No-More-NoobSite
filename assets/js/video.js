document.addEventListener('DOMContentLoaded', function () {
  const videoIcon = document.querySelector('.videoIcon');
  const videoFrame = document.getElementById('videoFrame');
  const bgColor = document.querySelector('.mfp-bg');
  
  videoIcon.addEventListener('click', function (event) {
      event.stopPropagation();
      videoFrame.style.display = 'block';
      bgColor.style.display = 'block';
      videoFrame.src = 'https://www.youtube.com/embed/G1IbRujko-A?si=0APN9N-h_3JKkHA0';
  });

  document.body.addEventListener('click', function (event) {
      if (!event.target.classList.contains('videoIcon')) {
          videoFrame.style.display = 'none';
          bgColor.style.display = 'none';
          videoFrame.src = '';
      }
  });
});
