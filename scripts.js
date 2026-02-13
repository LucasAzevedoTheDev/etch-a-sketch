let container = document.querySelector(".container");
let squareDiv = "";

// CREATING THE SQUARES
for(i = 0; i < 257; i++) {
  squareDiv = document.createElement("div");
  squareDiv.setAttribute("class", "square");

  container.appendChild(squareDiv);
}
