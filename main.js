function init() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.dataset.active = "false");
      button.dataset.active = "true";
    });
  });
}

window.addEventListener("DOMContentLoaded", init)