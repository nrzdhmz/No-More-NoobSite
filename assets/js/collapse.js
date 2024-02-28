let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    let content = this.nextElementSibling;
    let plusIcon = this.querySelector('.plus');
    let minusIcon = this.querySelector('.icon');

    for (let j = 0; j < coll.length; j++) {
      let isActive = coll[j].classList.contains("active");
      if (coll[j] !== this && isActive) {
        coll[j].classList.remove("active");
        coll[j].nextElementSibling.style.display = "none";
        document.getElementsByClassName("icon")[j].style.opacity = "0";
        document.getElementsByClassName("plus")[j].style.opacity = "1";
        coll[j].style.color = "#010A44";
      }
    }

    this.classList.toggle("active");
    let isBlock = content.style.display === "block";
    content.style.display = isBlock ? "none" : "block";
    minusIcon.style.opacity = isBlock ? "0" : "1";
    plusIcon.style.opacity = isBlock ? "1" : "0";
    this.style.color = isBlock ? "#010A44" : "#7EA0FF";
  });
}
