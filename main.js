//Creating a function called pita and cell is the argument
const pita = (cell) => {
  //If the content within the cell is precisly equals a string of nothing
    if (cell.textContent === '') {
      //If turn which is equal to zero and the remainder after dividing by two is precisely equal to 0
      if (turn % 2 === 0) {
        //Intializing letter and it is equal to the string of X and it was created by using createTextNode
        let letter = document.createTextNode('X');
        //This is using the argument of cell and adding it to the cell which is adding an X
        cell.appendChild(letter);
        //If turn which is equal to zero and the remaider after dividing by two precisely equals to 1
      } else if (turn % 2 === 1) {
        //Intializing letter and in this case it equals a string of O and it was created by using createTextNode
        let letter = document.createTextNode('O');
        //This is using the argument of cell and adding it to the cell which is adding an O
        cell.appendChild(letter);
      }
      //This is within the if statement and it adds to turn which at the start it equals 0 and it progressively goes up by one each time
      turn++;
    }
}

//Creating a function called winner and the argument is empty
const winner = () => {
  //Initializing result and it equals false until otherwise told
  let result = false;

  //This sets up a for loop that initializes i and it is equal to 1 at the start and goes through the loop 3 times, 1, 2 and 3
  for (let i = 1; i < 4; i++) {
    //Initializing rowEls and selects all of the items that have the class of row and everytime through the loop i changes with the loop
    let rowEls = document.querySelectorAll(`.row${i}`);
    //If the zeroith rowEls content does not equal a blank string and the zeroith rowEls equals the first rowEls content and the first rowEls equals the second rowEls content. Which in the long run means 0 == 1 and 1 == 2, interms means 0 == 3. The first just means when there blank they don't equal a winner.
    if (rowEls[0].textContent !== "" && rowEls[0].textContent == rowEls[1].textContent && rowEls[1].textContent == rowEls[2].textContent) {
      //If above works, it will change the result from false to true
      result = true;
    }
  }


  //This sets up a for loop that initializes i and it is equal to 1 at the start and goes through the loop 3 times, 1, 2 and 3
  for (let i = 1; i < 4; i++) {
    //Initializing columnEls and selects all of the items that have the class of column and everytime through the loop i changes with the loop
    let columnEls = document.querySelectorAll(`.column${i}`);
    //If the zeroith columnEls content does not equal a blank string and the zeroith columnEls equals the first columnEls content and the first columnEls equals the second columnEls content. Which in the long run means 0 == 1 and 1 == 2, interms means 0 == 3. The first just means when there blank they don't equal a winner.
    if (columnEls[0].textContent !== "" && columnEls[0].textContent == columnEls[1].textContent && columnEls[1].textContent == columnEls[2].textContent) {
      //If above works, it will change the result from false to true
      result = true;
    }
  }

  //This sets up a for loop that initializes i and it is equal to 1 at the start and goes through the loop 2 times 1 and 2
  for (let i = 1; i < 3; i++) {
    //Initializing diagonalEls and selects all of the items that have the class of diagonal and everytime through the loop i changes with the loop
    let diagonalEls = document.querySelectorAll(`.diagonal${i}`);
    //If the zeroith diagonalEls content does not equal a blank string and the zeroith diagonalEls equals the first diagonalEls content and the first diagonalEls equals the second diagonalEls content. Which in the long run means 0 == 1 and 1 == 2, interms means 0 == 3. The first just means when there blank they don't equal a winner.
    if (diagonalEls[0].textContent !== "" && diagonalEls[0].textContent == diagonalEls[1].textContent && diagonalEls[1].textContent == diagonalEls[2].textContent) {
      //If above works, it will change the result from false to true
      result = true;
    }
  }

//If there is a win, and it is an even turn, O wins
  if (result == true && turn % 2 == 0) {
    //creates paragraph element
    winPara = document.createElement('p');
    //creates text node with O victory text
    winText = document.createTextNode('O Wins!');
    //styles paragraph element
    winPara.style.cssText ="position: absolute; bottom: 5%";
    //attaches text node to element
    winPara.appendChild(winText);
    //attaches p element to body
    document.body.appendChild(winPara);
    //if there is a win but it is an odd turn, X wins
  } else if (result == true && turn % 2 == 1) {
    winPara = document.createElement('p');
    winText = document.createTextNode('X Wins!');
    winPara.style.cssText ="position: absolute; bottom: 5%";
    winPara.appendChild(winText);
    document.body.appendChild(winPara);
    //If it reaches turn 9 without a winner, Stalemate!
  } else if (turn == 9){
    winPara = document.createElement('p');
    winText = document.createTextNode('Stalemate!');
    winPara.style.cssText ="position: absolute; bottom: 5%";
    winPara.appendChild(winText);
    document.body.appendChild(winPara);
  }
}

const reset = () => {
  for (let i of document.querySelectorAll('p')) {
    if (document.body.contains(winPara)) {
      document.body.removeChild(winPara);
    }
    removeChildren(i);
  }

  for (let cell of cells) {
    removeChildren(cell);
  }
  turn = 0;
}

const removeChildren = (parentNode) => {
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  }
}


//Intializing cells and it is equal/ getting all of the td in the html
let cells = document.querySelectorAll('td');
//Intializing cellsArray and it is putting cells in an array
let cellsArray = Array.from(cells);
//Intializing turn with a number value
let turn = 0;
//variables to be used in the winner function
let winPara;
let winText;
//initializes button variable and adds event listener for reset function
let button = document.getElementById('button1')
button.addEventListener('click', reset);

//This sets up a loop that initializes i to equal 0 and it will go until it is at it's max of being less than the length of the cellsArray and it will add 1 everythime through the loop.
for(let i = 0; i < cellsArray.length; i++) {
  //Initializing cell to equal cellsArray and everything that is from the loop [0, 1, 2....8]. Which these are the spots in the Tic Tac Toe gameboard
  let cell = cellsArray[i];
  //This is adding an EventListener to the cell which is equal to the cellsArray[i]. On click and it is a empty function
  cell.addEventListener('click', () => {
    //This calls the pita function that is used for the x's and o's in tic tac toe. And cell is the argument in the pita function
    pita(cell);
    winner();
  });
}
