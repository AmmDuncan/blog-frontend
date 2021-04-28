"use strict";

const latestArticles = document.querySelector(".latest-content .articles");
const shiftLeft = document.querySelector(".shift__btn--left");
const shiftRight = document.querySelector(".shift__btn--right");

const displayAppropriateBtns = () => {
  if (latestArticles.scrollLeft > 0) {
    shiftLeft.style.display = "flex";
  } else {
    shiftLeft.style.display = "none";
  }
  if (
    latestArticles.scrollLeft >=
    getLatestArticlesWidth() - window.innerWidth
  ) {
    shiftRight.style.display = "none";
  } else {
    shiftRight.style.display = "flex";
  }
};

function getLatestArticlesWidth() {
  const children = document.querySelectorAll(".latest-content .articles>*");
  let width = 224;
  children.forEach((child) => {
    width += child.getBoundingClientRect().width;
  });

  return width;
}

document.addEventListener("DOMContentLoaded", function () {

  if (window.innerWidth > 640) {

  displayAppropriateBtns();

  latestArticles.addEventListener("scroll", function () {
    displayAppropriateBtns();
  });

    shiftLeft.addEventListener("click", function () {
      latestArticles.scrollTo({
        left:
            latestArticles.scrollLeft -
            (window.innerWidth > 671 ? 0.8 * window.innerWidth : 344),
        behavior: "smooth",
      });
      // latestArticles.scrollLeft -= window.innerWidth;
    });

    shiftRight.addEventListener("click", function () {
      latestArticles.scrollTo({
        left:
            latestArticles.scrollLeft +
            (window.innerWidth > 671 ? 0.8 * window.innerWidth : 344),
        behavior: "smooth",
      });
    });
  }
});
