const signInBtn = document.getElementById("Operario");
const signUpBtn = document.getElementById("Administracion");
const container = document.getElementById("container");

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});


