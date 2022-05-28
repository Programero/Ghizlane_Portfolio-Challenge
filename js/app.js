/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

// function scrollActive() {
//   const scrollY = window.pageYOffset;
//   // console.log("calling onscroll event");
//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight,
//       sectionTop = current.offsetTop - 50,
//       sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".nav__menu a[href*=" + sectionId + "]")
//         .classList.add("active-link");
//     } else {
//       document
//         .querySelector(".nav__menu a[href*=" + sectionId + "]")
//         .classList.remove("active-link");
//     }
//   });
// }
// window.addEventListener("scroll", scrollActive);

///-------------------------Writing the same code for scroll using Intersection Observer--------------------///
let intersectionObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sections.forEach((sectionEle) => {
          document
            .querySelector(".nav__menu a[href*=" + sectionEle.id + "]")
            .classList.remove("active-link");
        });
        let sectionEle = entry.target;
        document
          .querySelector(".nav__menu a[href*=" + sectionEle.id + "]")
          .classList.add("active-link");
      }
    });
  },
  {
    root: null,
    rootMargin: "0px 0px -100% 0px",
    threshold: [0],
  }
);

sections.forEach((sectionEle) => {
  intersectionObserver.observe(sectionEle);
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
// function scrollHeader() {
//   const header = document.getElementById("header");
//   // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
//   if (this.scrollY >= 80) header.classList.add("scroll-header");
//   else header.classList.remove("scroll-header");
// }
// window.addEventListener("scroll", scrollHeader);

/////------------------Implementing CHANGE BACKGROUND HEADER using IntersectionObserver -----------------------/////
let headerIntersectionObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (window.pageYOffset > 80) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    });
  },
  {
    root: null,
    rootMargin: `-${window.innerHeight - 80}px 0px 0px 0px`,
    threshold: [0],
  }
);
headerIntersectionObserver.observe(window.home);

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

/*=============== LOADER ===============*/
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  let delayInMilliseconds = 1000;
  setTimeout(function () {
    loader.classList.add("fondu-out");
  }, delayInMilliseconds);
});
