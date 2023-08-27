document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".warp");
  const jumboImg = document.querySelector(".jumbo");
  const images = document.querySelectorAll(".images");

  container.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("images")) {
      jumboImg.src = e.target.src;
      jumboImg.classList.add("fade");
      setTimeout(function () {
        jumboImg.classList.remove("fade");
      }, 200);

      images.forEach(function (image) {
        if (image.classList.contains("opacity-50")) {
          image.classList.remove("opacity-50");
        }
      });
      e.target.classList.add("opacity-50");
    }
  });
});
