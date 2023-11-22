const getRandomColor = function() {
  const niceColors = ["red", "blue", "green"];
  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
};

const container = document.getElementById("container");

for (let i = 0; i < 3; i++) {
  const box = document.createElement("div");
  box.className = "box";
  box.style.backgroundColor = getRandomColor();
  box.onmouseenter = function() {
    box.style.backgroundColor = getRandomColor();
    checkColors();
  };
  container.appendChild(box);
}

function checkColors() {
  const boxes = Array.from(container.getElementsByClassName("box"));
  const all = boxes.every(box => box.style.backgroundColor === boxes[0].style.backgroundColor);

  if (all) {
    alert('Nice job!');
  }
}
