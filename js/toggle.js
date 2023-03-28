(() => {
  const toggleElem = document.querySelector(".toggle");
  const menuOpen = document.querySelector(".menu-open");
  toggleElem.addEventListener("click", function () {
    menuOpen.classList.toggle("active");
  });
})();
