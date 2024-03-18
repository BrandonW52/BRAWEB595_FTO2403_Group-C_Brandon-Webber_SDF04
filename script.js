const btn3container = document.querySelector(".btn3container");
const Btn3 = document.querySelector(".btn-3");
const btn3containerRect = btn3container.getBoundingClientRect();
const Btn3Rect = Btn3.getBoundingClientRect();

Btn3.addEventListener("mouseover", () => {
  const i =
    Math.floor(Math.random() * (btn3containerRect.width - Btn3Rect.width)) + 1;
  const j =
    Math.floor(Math.random() * (btn3containerRect.height - Btn3Rect.height)) +
    1;
  Btn3.style.left = i + "px";
  Btn3.style.top = j + "px";
});
