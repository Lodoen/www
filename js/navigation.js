const navigation = document.getElementById("navigation-hamburger");
navigation.addEventListener("click", () => {
  document.querySelector(".navigation-hamburger img").src = navigation.checked ? "/img/icon/exit-icon.png" : "/img/icon/menu-icon.png";
});
