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

const handleClick = (event) => {
    const pieceToMove = event.target.id;

    boardElement.addEventListener("click", (event) => {
        event.stopPropagation();
        const pieceDestination = event.target.id;
        console.log(pieceToMove);
        console.log(pieceDestination);
    })
}

/*----------- Event Listeners ----------*/

boardElement.addEventListener("click", handleClick);

/*-------------- Graveyard -------------*/

// console.dir(squareElements);
// console.dir(boardElement);