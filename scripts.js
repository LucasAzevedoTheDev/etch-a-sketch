let container = document.querySelector(".container");


for(i = 0; i < 256; i++) {
  let squareDiv = document.createElement("div");
  squareDiv.setAttribute("class", "square");
  
  // HOVER EFFECT
  squareDiv.addEventListener("mouseenter", () => {
  squareDiv.style.backgroundColor = "black"; 
  });
  squareDiv.addEventListener("mouseleave", () => {
  squareDiv.style.backgroundColor = "white"; 
  });
  
  container.appendChild(squareDiv);
}

