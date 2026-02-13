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

let inputButton = document.querySelector(".input");
inputButton.onclick = () => {
  let input = prompt("Please write the number of squares you'd like", "");
  container.remove();
  
  if(input < 100) {
    document.body.appendChild(container);
    squareDiv = document.createElement("div");
    squareDiv.setAttribute("class", "square");

    for(i = 0; i < input; i++) {
      container.appendChild(squareDiv);
    }
  }

  else if(input > 100) {
    alert("Size not supported.");
  }
}