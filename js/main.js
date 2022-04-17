const iconMenu = document.querySelector(".menu__burger");
if (iconMenu) {
  const menuBody = document.querySelector(".menu__body");
  iconMenu.addEventListener("click", function () {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_open");
    menuBody.classList.toggle("_open");
  });
}

Fancybox.bind('[data-fancybox="gallery"]', {
  infinite: false,
});
