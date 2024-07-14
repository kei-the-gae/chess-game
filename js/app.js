/*-------------- Constants -------------*/



/*---------- Variables (state) ---------*/



/*----- Cached Element References  -----*/

const squareElements = document.querySelectorAll(".square");
const boardElement = document.querySelector(".board");

/*-------------- Functions -------------*/

const initializeBoard = () => {
    let i = 0;
    board.forEach((row, rowIdx) => {
        row.forEach((square, columnIdx) => {
            if (square !== "") {
                const pieceElement = document.createElement("div");
                let pieceAttributes;
                const getPieceAttributes = () => {
                    let color;
                    const piece = board[rowIdx][columnIdx]
                    if (rowIdx <= 1) color = "black";
                    if (rowIdx >= 6) color = "white";
                    pieceAttributes = { color: color, piece: piece };
                }
                getPieceAttributes();

                pieceElement.setAttribute("class", `${pieceAttributes.color} ${pieceAttributes.piece}`);
                pieceElement.textContent = pieceAttributes.piece;
                squareElements[i].appendChild(pieceElement);
            };
            i++;
        });
    });
};

const updateBoard = () => {
    let i = 0;
    board.forEach((row, rowIdx) => {
        row.forEach((square, columnIdx) => {
            if (square !== "") {

            };
            i++;
        });
    });
};

const render = () => {
    updateBoard();
};

const init = () => {
    board = startingBoard;
    initializeBoard();
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