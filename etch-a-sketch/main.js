const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');

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

// Initial grid creation
createGrid(16);

resetButton.addEventListener('click', function () {
  let newSize = prompt('Enter the number of squares per side (maximum: 100):');
  newSize = Math.min(Math.max(1, newSize), 100); // Limit size between 1 and 100
  createGrid(newSize);
});
