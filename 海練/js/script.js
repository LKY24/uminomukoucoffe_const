let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
  nav.classList.toggle("open");
};
mask.onclick = () => {
  nav.classList.toggle("open");
};

$(function () {
  $(".js-menu__item__link").each(function () {
    $(this).on("click", function () {
      $("+.submenu", this).slideToggle();
      return false;
    });
  });
});
