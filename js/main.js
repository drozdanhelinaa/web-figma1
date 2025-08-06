const navigationLinks = document.querySelectorAll("nav #navigation ul a");

const disactiveLinks = () => {
  navigationLinks.forEach((link) => {
    link.classList.remove("active");
  });
};

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    disactiveLinks();
    link.classList.add("active");
  });
});
