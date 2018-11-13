let cells = document.querySelectorAll('td');
let cellsArray = Array.from(cells);
let p1 = 0;
let p2 = 1;
let turn = 0;

const pita = (cell) => {
//  if () {
    if (cell.textContent === '') {
      if (turn % 2 === p1) {
        let letter = document.createTextNode('X');
        cell.appendChild(letter);
      } else if (turn % 2 === p2) {
        let letter = document.createTextNode('O');
        cell.appendChild(letter);
      }
      turn++;
    }
//  }
}


const winner = () => {
  let result = false;

  for (let i = 1; i < 4; i++) {
    let rowEls = document.querySelectorAll(`.row${i}`);
    if (rowEls[0].textContent !== "" && rowEls[0].textContent == rowEls[1].textContent && rowEls[1].textContent == rowEls[2].textContent) {
      result = true;
    }
  }



  for (let i = 1; i < 4; i++) {
    let columnEls = document.querySelectorAll(`.column${i}`);
    if (columnEls[0].textContent !== "" && columnEls[0].textContent == columnEls[1].textContent && columnEls[1].textContent == columnEls[2].textContent) {
      result = true;
    }
  }

  for (let i = 1; i < 3; i++) {
    let diagonalEls = document.querySelectorAll(`.diagonal${i}`);
    if (diagonalEls[0].textContent !== "" && diagonalEls[0].textContent == diagonalEls[1].textContent && diagonalEls[1].textContent == diagonalEls[2].textContent) {
      result = true;
    }
  }
  return result;
}


for(let i = 0; i < cellsArray.length; i++) {
  let cell = cellsArray[i];
  cell.addEventListener('click', () => {
    pita(cell);
  });
}
