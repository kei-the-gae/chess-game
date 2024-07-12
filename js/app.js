/*-------------- Constants -------------*/



/*---------- Variables (state) ---------*/



/*----- Cached Element References  -----*/

const squareElements = document.querySelectorAll(".square");
const boardElement = document.querySelector(".board");

/*-------------- Functions -------------*/

const updateBoard = () => {
    let i = 0;
    board.forEach((row, rowIdx) => {
        row.forEach((square, columnIdx) => {
            if (square !== "") { squareElements[i].textContent = board[rowIdx][columnIdx]; };
            i++;
        });
    });
};

const render = () => {
    updateBoard();
};

const init = () => {
    board = startingBoard;
    render();
};

init();

/*----------- Event Listeners ----------*/



/*-------------- Graveyard -------------*/

console.dir(squareElements);
console.dir(boardElement);