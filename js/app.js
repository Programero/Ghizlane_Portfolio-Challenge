/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== PROJECTS FILTER ===============*/
const tagList = document.querySelectorAll(".list-tag");
const projects = document.querySelectorAll(".project");

for (let i = 0; i < tagList.length; i++) {
  tagList[i].addEventListener("click", function () {
    for (let j = 0; j < tagList.length; j++) {
      tagList[j].classList.remove("active-tag");
    }
    this.classList.add("active-tag");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < projects.length; k++) {
      projects[k].classList.add("hide");
      projects[k].classList.remove("active");
      if (
        projects[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        projects[k].classList.add("active");
        projects[k].classList.remove("hide");
      }
    }
  });
}
