/*-------------- Constants -------------*/



/*---------- Variables (state) ---------*/

let turn;
let selectedPiece;
let pieceDestination;

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
                let pieceType;
                const getPieceAttributes = () => {
                    let color;
                    const piece = board[rowIdx][columnIdx]
                    if (rowIdx <= 1) color = "black";
                    if (rowIdx >= 6) color = "white";
                    pieceAttributes = { color: color, piece: piece };
                    if (piece.startsWith("R")) pieceType = Rook;
                    if (piece.startsWith("N")) pieceType = Knight;
                    if (piece.startsWith("B")) pieceType = Bishop;
                    if (piece.startsWith("Q")) pieceType = Queen;
                    if (piece.startsWith("K")) pieceType = King;
                    if (piece.startsWith("P")) pieceType = Pawn;
                }
                getPieceAttributes();

                pieceElement.setAttribute("class", `piece ${pieceAttributes.color} ${pieceAttributes.piece}`);
                if (pieceElement.getAttribute("class").includes("white")) pieceElement.setAttribute("draggable", "true");
                if (pieceElement.getAttribute("class").includes("black")) pieceElement.setAttribute("draggable", "false")
                pieceElement.textContent = pieceAttributes.piece;
                squareElements[i].appendChild(pieceElement);
                if (pieceAttributes.color === "white") whitePieces.push(new pieceType(pieceAttributes.piece, "white", squareElements[i].getAttribute("id")));
                if (pieceAttributes.color === "black") blackPieces.push(new pieceType(pieceAttributes.piece, "black", squareElements[i].getAttribute("id")));
            };
            i++;
        });
    });
};

const init = () => {
    board = startingBoard;
    turn = "white";
    initializeBoard();
};

init();

const updateBoard = () => {
    let i = 0;
    board.forEach((row, rowIdx) => {
        row.forEach((square, columnIdx) => {
            if (squareElements[i].textContent !== board[rowIdx][columnIdx]) {
                board[rowIdx][columnIdx] = squareElements[i].textContent;
            }
            i++;
        });

    });
};

const makeTurn = () => {
    updateBoard();
}

// additional cache for pieces created in initialization
const pieceElements = document.querySelectorAll(".piece");



/*----------- Event Listeners ----------*/

pieceElements.forEach((piece) => {
    piece.addEventListener("dragstart", (event) => {
        selectedPiece = event.target;
        squareElements.forEach((square) => {
            square.addEventListener("dragover", (event => {
                event.preventDefault();
            }));
            squareElements.forEach((square) => {
                square.addEventListener("drop", (event) => {
                    square.appendChild(selectedPiece);
                    selectedPiece = null;
                    makeTurn();
                    console.log(board);
                });
            });
        });
    });
});

/*-------------- Graveyard -------------*/

// console.dir(squareElements);
// console.dir(boardElement);
// console.dir(pieceElements);
// console.log(whitePieces);
// console.log(blackPieces);
// console.log(board);