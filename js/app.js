/*-------------- Constants -------------*/



/*---------- Variables (state) ---------*/

let msg;
let turn;
let selectedPiece;
let moveStart;
let moveDestination;
let capturedPiece;

/*----- Cached Element References  -----*/

const squareElements = document.querySelectorAll(".square");
const boardElement = document.querySelector(".board");
const messageElement = document.querySelector("#message");
const resetElement = document.querySelector("#reset");

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
                if (pieceElement.getAttribute("class").includes("black")) pieceElement.setAttribute("draggable", "false");
                pieceElement.textContent = pieceAttributes.piece;
                squareElements[i].appendChild(pieceElement);
                if (pieceAttributes.color === "white") whitePieces.push(new pieceType(pieceAttributes.piece, "white", squareElements[i].getAttribute("id")));
                if (pieceAttributes.color === "black") blackPieces.push(new pieceType(pieceAttributes.piece, "black", squareElements[i].getAttribute("id")));
            };
            i++;
        });
    });
};

const msgInit = () => {
    msg = `It's ${turn}'s move`;
    messageElement.textContent = msg;
};

const init = () => {
    board = startingBoard.map((arr) => { return arr.slice() });
    turn = "white";
    msgInit();
    initializeBoard();
};

init();

// additional cache for pieces created in initialization
const pieceElements = document.querySelectorAll(".piece");

const findMoveStart = () => {
    if (turn === "white") {
        whitePieces.find((piece) => { if (selectedPiece.getAttribute("class").includes(piece.name)) moveStart = piece.position })
    };
    if (turn === "black") {
        blackPieces.find((piece) => { if (selectedPiece.getAttribute("class").includes(piece.name)) moveStart = piece.position })
    };
};

const capturePiece = () => {
    let notationMapObj = notationMap[moveDestination];
    let moveDestinationArrayIndex = notationMapObj.boardArrayIndex;
    if (board[moveDestinationArrayIndex[0]][moveDestinationArrayIndex[1]] !== "") {
        const index = notationMapObj.squareElsIndex;
        board[moveDestinationArrayIndex[0]][moveDestinationArrayIndex[1]] = ""
        capturedPiece = squareElements[index].innerHTML;
        squareElements[index].childNodes[0].replaceWith("");
    }
}

const updateBoard = () => {
    let i = 0;
    board.forEach((row, rowIdx) => {
        row.forEach((square, columnIdx) => {
            if (squareElements[i].id === moveStart) {
                board[rowIdx][columnIdx] = "";
            };
            if (squareElements[i].id === moveDestination) {
                board[rowIdx][columnIdx] = selectedPiece.textContent;
            };
            i++;
        });
    });
};

const updateObj = () => {
    if (turn === "white") {
        whitePieces.find((piece) => {
            if (piece.position === moveStart) {
                piece.position = moveDestination;
                if (piece.name.startsWith("P") && piece.firstMove === true) piece.firstMove = false;
            };
        });
        if (capturedPiece) {
            blackPieces.forEach((piece, i) => {
                if (capturedPiece.includes(piece.name)) blackPieces.splice(i, 1);
            });
        };
    };
    if (turn === "black") {
        blackPieces.find((piece) => {
            if (piece.position === moveStart) {
                piece.position = moveDestination;
                if (piece.name.startsWith("P") && piece.firstMove === true) piece.firstMove = false;
            };
        });
        if (capturedPiece) {
            whitePieces.forEach((piece, i) => {
                if (capturedPiece.includes(piece.name)) whitePieces.splice(i, 1);
            });
        };
    };
};

const changeTurn = () => {
    if (turn === "white") {
        pieceElements.forEach((piece) => {
            if (piece.getAttribute("class").includes("white")) piece.setAttribute("draggable", "false");
            if (piece.getAttribute("class").includes("black")) piece.setAttribute("draggable", "true");
        });
    };
    if (turn === "black") {
        pieceElements.forEach((piece) => {
            if (piece.getAttribute("class").includes("white")) piece.setAttribute("draggable", "true");
            if (piece.getAttribute("class").includes("black")) piece.setAttribute("draggable", "false");
        });
    };
    switch (turn === "white") {
        case true:
            turn = "black";
            break;
        case false:
            turn = "white";
            break;
    };
    msg = `It's ${turn}'s move`
};

const isKingCaptured = () => {
    let whiteKing;
    let blackKing;
    whitePieces.find((piece) => { if (piece.name === "K1") whiteKing = true });
    blackPieces.find((piece) => { if (piece.name === "K1") blackKing = true });
    if (whiteKing !== true) {
        msg = `Black wins!`
    };
    if (blackKing !== true) {
        msg = `White wins!`
    };
}

const render = (event) => {
    event.target.appendChild(selectedPiece);
    messageElement.textContent = msg;
};

const makeTurn = (event) => {
    findMoveStart();
    capturePiece();
    updateBoard();
    updateObj();
    changeTurn();
    isKingCaptured();
    render(event);
    selectedPiece = null;
    moveStart = null;
    moveDestination = null;
    capturedPiece = null;

};


/*----------- Event Listeners ----------*/

for (let piece of pieceElements) {
    piece.addEventListener("dragstart", (event) => {
        event.stopPropagation();
        selectedPiece = event.target;
    })
};
for (let square of squareElements) {
    square.addEventListener("dragover", (event) => {
        event.stopPropagation();
        event.preventDefault();
    })
};
for (let square of squareElements) {
    square.addEventListener("drop", (event) => {
        event.stopPropagation();
        event.preventDefault();
        moveDestination = event.target.id.length ? event.target.id : event.target.childNodes[0]?.parentNode.parentNode.id;
        makeTurn(event);
    });
};

