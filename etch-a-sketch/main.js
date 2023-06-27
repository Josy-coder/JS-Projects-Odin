const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');

let interactionCount = 0; // Track the number of interactions

function createGrid(size) {
  // Clear existing grid
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Create new grid
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      container.appendChild(square);
    }
  }
}

// Function to generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to darken the square by adding black
function darkenSquare(square) {
  const currentColor = window.getComputedStyle(square).backgroundColor;
  const rgbValues = currentColor.slice(4, -1).split(', ');

  let r = parseInt(rgbValues[0]);
  let g = parseInt(rgbValues[1]);
  let b = parseInt(rgbValues[2]);

  // Increase black component by 10%
  r -= Math.floor(r * 0.1);
  g -= Math.floor(g * 0.1);
  b -= Math.floor(b * 0.1);

  square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Initial grid creation
createGrid(16);

resetButton.addEventListener('click', function () {
  let newSize = prompt('Enter the number of squares per side (maximum: 100):');
  newSize = Math.min(Math.max(1, newSize), 100); // Limit size between 1 and 100
  createGrid(newSize);
});

container.addEventListener('mouseover', function (event) {
  const square = event.target;
  if (square.classList.contains('square')) {
    // Generate random color for the square
    const randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;

    // Darken the square by adding black
    darkenSquare(square);

    interactionCount++;
    if (interactionCount >= 10) {
      // Remove event listener after ten interactions
      container.removeEventListener('mouseover', arguments.callee);
    }
  }
});
