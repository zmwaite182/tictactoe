let cells = document.querySelectorAll('td');
let cellsArray = Array.from(cells);
console.log(cellsArray);

for(let i = 0; i < cellsArray.length; i++) {
  let cell = cellsArray[i];
  cell.addEventListener('click', event => {
    let letter = document.createTextNode('X');
    cell.appendChild(letter);
  });
}
