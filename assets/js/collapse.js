let coll = document.getElementsByClassName("collapsible");
let plus = document.getElementsByClassName("plus");
let minus = document.getElementsByClassName("icon");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    var plusIcon = this.querySelector('.plus');
    var minusIcon = this.querySelector('.icon');

    for (var j = 0; j < coll.length; j++) {
      if (coll[j] !== this && coll[j].classList.contains("active")) {
        coll[j].classList.remove("active");
        coll[j].nextElementSibling.style.display = "none";
        minus[j].style.opacity = "0";
        plus[j].style.opacity = "1";
      }
    }

    this.classList.toggle("active");

    if (content.style.display === "block") {
      content.style.display = "none";
      minusIcon.style.opacity = "0";
      plusIcon.style.opacity = "1";
    } else {
      content.style.display = "block";
      minusIcon.style.opacity = "1";
      plusIcon.style.opacity = "0";
    }
  });
}



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


