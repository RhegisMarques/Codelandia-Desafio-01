const icons = Array.from(document.querySelectorAll(".hears"));

icons.forEach((icon) =>
  icon.addEventListener("click", function () {
    this.classList.toggle("filled");
  })
);
