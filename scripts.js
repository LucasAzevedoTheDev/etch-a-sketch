let container = document.querySelector(".container");
let inputButton = document.querySelector(".input");

function createGrid(size) {
  container.innerHTML = "";

  for (let x = 0; x < size; x++) {
    let row = document.createElement("div");
    row.classList.add("gridRow");
  

    for (let y = 0; y < size; y++) {
      let square = document.createElement("div");
      square.classList.add("square");

      square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
      });
      square.addEventListener("mouseleave", () => {
        square.style.backgroundColor = "grey";
      });

      row.appendChild(square);
    }

    container.appendChild(row);
  }
}

inputButton.onclick = () => {
  let input = prompt("Please write a number between 1 and 100", "");

  if (input < 100) {
    createGrid(input);
  }
  else {
    alert("Please choose a number between 1 and 100");
  }
}

createGrid(16);
