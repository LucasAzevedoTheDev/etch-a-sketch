let container = document.querySelector(".container");
let squareDiv = "";

for(i = 0; i < 256; i++) {
  let squareDiv = document.createElement("div");
  squareDiv.setAttribute("class", "square");
  
  // HOVER EFFECT
  squareDiv.addEventListener("mouseenter", () => {
  squareDiv.style.backgroundColor = "black"; 
  });
  squareDiv.addEventListener("mouseleave", () => {
  squareDiv.style.backgroundColor = "grey"; 
  });
  
  container.appendChild(squareDiv);
}

// add a button that sends a popup
let inputButton = document.querySelector(".input");
inputButton.onclick = () => {
  let ouput = prompt("Please write the number of squares you'd like", "");
  container.remove();
  
}
// the popup should ask the number of squares per side
// once entered, the existing grid should be removed
// a new grid should be generate in the same total space
// set a limit for the user input to max of 100 squares
