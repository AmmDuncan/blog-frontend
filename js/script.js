"use strict";

const latestArticles = document.querySelector(".latest-content .articles");
const shiftLeft = document.querySelector(".shift__btn--left");
const shiftRight = document.querySelector(".shift__btn--right");

const displayAppropriateBtns = () => {
  if (latestArticles.scrollLeft > 0) {
    shiftLeft.style.display = "block";
  } else {
    shiftLeft.style.display = "none";
  }
  if (latestArticles.scrollLeft >= latestArticles.scrollLeftMax - 40) {
    shiftRight.style.display = "none";
  } else {
    shiftRight.style.display = "block";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  displayAppropriateBtns();

  latestArticles.addEventListener("scroll", function () {
    displayAppropriateBtns();
  });

  shiftLeft.addEventListener("click", function () {
    latestArticles.scrollTo({
      left:
        latestArticles.scrollLeft -
        (window.innerWidth > 672 ? 0.8 * window.innerWidth : 336),
      behavior: "smooth",
    });
    // latestArticles.scrollLeft -= window.innerWidth;
  });

  shiftRight.addEventListener("click", function () {
    latestArticles.scrollTo({
      left:
        latestArticles.scrollLeft +
        (window.innerWidth > 672 ? 0.8 * window.innerWidth : 336),
      behavior: "smooth",
    });
  });
});
