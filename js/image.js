(() => {
  const prev = document.querySelector(".control .prev");
  const next = document.querySelector(".control .next");
  const card = document.querySelector(".header .card");
  const size = document.querySelector(".header .img").clientWidth;
  const itemElems = document.querySelectorAll(".header .item");
  console.log(size);
  let current = 0;

  next.addEventListener("click", function () {
    console.log("clicked");
    current++;
    card.style.transform = `translateX(${current * -size}px)`;
    card.style.transition = "0.5s";
  });
})();
