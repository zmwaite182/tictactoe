let cells = document.querySelectorAll('td');
let cellsArray = Array.from(cells);

let p1 = 0;
let p2 = 1;
let turn = 0;

if (turn < cellsArray.length) {
  for(let i = 0; i < cellsArray.length; i++) {
    let cell = cellsArray[i];
    cell.addEventListener('click', event => {
      if (turn % 2 == p1) {
        let letter = document.createTextNode('X');
        cell.appendChild(letter);
      } else {
        let letter = document.createTextNode('O');
        cell.appendChild(letter);
      }
      turn++;
    });
  }
}
