const container = document.getElementById("container");
const colors = [
  "#e74c3c",
  "#8e44ad",
  "#3498db",
  "#e67e22",
  "#2ecc71",
  "#f2e335",
  "#ef4a92",
];
const box = 300;

for (let i = 0; i < box; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseout", () => {
    removeColor(square);
  });

  square.addEventListener("click", () => {
    setColor(square);
  });

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 1px ${color}`;
}

function removeColor(element) {
  element.style.background = "#19172e";
  element.style.boxShadow = `0 0 2px #ffffff`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
