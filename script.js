const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements1 = document.querySelectorAll(".project-tile1");
const hiddenElements2 = document.querySelectorAll(".project-tile2");
const hiddenElements3 = document.querySelectorAll(".project-tile3");
const hiddenTitle = document.querySelectorAll(".project-title");

hiddenElements1.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
hiddenElements3.forEach((el) => observer.observe(el));
hiddenTitle.forEach((el) => observer.observe(el));
