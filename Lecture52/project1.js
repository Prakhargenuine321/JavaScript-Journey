const selBody = document.querySelector("body");
const button = document.querySelectorAll(".button");

button.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.id === "yellow") {  //yahan par 'e.target' sae hum jaan sakte hain ki yaeh event kahan sae aaya hai.
      selBody.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "lightgreen") {
      selBody.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "orange") {
      selBody.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      selBody.style.backgroundColor = e.target.id;
    }
  });
});
