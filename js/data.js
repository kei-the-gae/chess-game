let board = [
    // black start
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    // white start
];

const startingBoard = [
    // black start
    ["R1", "N1", "B1", "Q1", "K1", "B2", "N2", "R2"],
    ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8"],
    ["R1", "N1", "B1", "Q1", "K1", "B2", "N2", "R2"],
    // white start
];

const notationMap = {

    "A8": { squareElsIndex: 0, boardArrayIndex: [0, 0] },
    "B8": { squareElsIndex: 1, boardArrayIndex: [0, 1] },
    "C8": { squareElsIndex: 2, boardArrayIndex: [0, 2] },
    "D8": { squareElsIndex: 3, boardArrayIndex: [0, 3] },
    "E8": { squareElsIndex: 4, boardArrayIndex: [0, 4] },
    "F8": { squareElsIndex: 5, boardArrayIndex: [0, 5] },
    "G8": { squareElsIndex: 6, boardArrayIndex: [0, 6] },
    "H8": { squareElsIndex: 7, boardArrayIndex: [0, 7] },
    "A7": { squareElsIndex: 8, boardArrayIndex: [1, 0] },
    "B7": { squareElsIndex: 9, boardArrayIndex: [1, 1] },
    "C7": { squareElsIndex: 10, boardArrayIndex: [1, 2] },
    "D7": { squareElsIndex: 11, boardArrayIndex: [1, 3] },
    "E7": { squareElsIndex: 12, boardArrayIndex: [1, 4] },
    "F7": { squareElsIndex: 13, boardArrayIndex: [1, 5] },
    "G7": { squareElsIndex: 14, boardArrayIndex: [1, 6] },
    "H7": { squareElsIndex: 15, boardArrayIndex: [1, 7] },
    "A6": { squareElsIndex: 16, boardArrayIndex: [2, 0] },
    "B6": { squareElsIndex: 17, boardArrayIndex: [2, 1] },
    "C6": { squareElsIndex: 18, boardArrayIndex: [2, 2] },
    "D6": { squareElsIndex: 19, boardArrayIndex: [2, 3] },
    "E6": { squareElsIndex: 20, boardArrayIndex: [2, 4] },
    "F6": { squareElsIndex: 21, boardArrayIndex: [2, 5] },
    "G6": { squareElsIndex: 22, boardArrayIndex: [2, 6] },
    "H6": { squareElsIndex: 23, boardArrayIndex: [2, 7] },
    "A5": { squareElsIndex: 24, boardArrayIndex: [3, 0] },
    "B5": { squareElsIndex: 25, boardArrayIndex: [3, 1] },
    "C5": { squareElsIndex: 26, boardArrayIndex: [3, 2] },
    "D5": { squareElsIndex: 27, boardArrayIndex: [3, 3] },
    "E5": { squareElsIndex: 28, boardArrayIndex: [3, 4] },
    "F5": { squareElsIndex: 29, boardArrayIndex: [3, 5] },
    "G5": { squareElsIndex: 30, boardArrayIndex: [3, 6] },
    "H5": { squareElsIndex: 31, boardArrayIndex: [3, 7] },
    "A4": { squareElsIndex: 32, boardArrayIndex: [4, 0] },
    "B4": { squareElsIndex: 33, boardArrayIndex: [4, 1] },
    "C4": { squareElsIndex: 34, boardArrayIndex: [4, 2] },
    "D4": { squareElsIndex: 35, boardArrayIndex: [4, 3] },
    "E4": { squareElsIndex: 36, boardArrayIndex: [4, 4] },
    "F4": { squareElsIndex: 37, boardArrayIndex: [4, 5] },
    "G4": { squareElsIndex: 38, boardArrayIndex: [4, 6] },
    "H4": { squareElsIndex: 39, boardArrayIndex: [4, 7] },
    "A3": { squareElsIndex: 40, boardArrayIndex: [5, 0] },
    "B3": { squareElsIndex: 41, boardArrayIndex: [5, 1] },
    "C3": { squareElsIndex: 42, boardArrayIndex: [5, 2] },
    "D3": { squareElsIndex: 43, boardArrayIndex: [5, 3] },
    "E3": { squareElsIndex: 44, boardArrayIndex: [5, 4] },
    "F3": { squareElsIndex: 45, boardArrayIndex: [5, 5] },
    "G3": { squareElsIndex: 46, boardArrayIndex: [5, 6] },
    "H3": { squareElsIndex: 47, boardArrayIndex: [5, 7] },
    "A2": { squareElsIndex: 48, boardArrayIndex: [6, 0] },
    "B2": { squareElsIndex: 49, boardArrayIndex: [6, 1] },
    "C2": { squareElsIndex: 50, boardArrayIndex: [6, 2] },
    "D2": { squareElsIndex: 51, boardArrayIndex: [6, 3] },
    "E2": { squareElsIndex: 52, boardArrayIndex: [6, 4] },
    "F2": { squareElsIndex: 53, boardArrayIndex: [6, 5] },
    "G2": { squareElsIndex: 54, boardArrayIndex: [6, 6] },
    "H2": { squareElsIndex: 55, boardArrayIndex: [6, 7] },
    "A1": { squareElsIndex: 56, boardArrayIndex: [7, 0] },
    "B1": { squareElsIndex: 57, boardArrayIndex: [7, 1] },
    "C1": { squareElsIndex: 58, boardArrayIndex: [7, 2] },
    "D1": { squareElsIndex: 59, boardArrayIndex: [7, 3] },
    "E1": { squareElsIndex: 60, boardArrayIndex: [7, 4] },
    "F1": { squareElsIndex: 61, boardArrayIndex: [7, 5] },
    "G1": { squareElsIndex: 62, boardArrayIndex: [7, 6] },
    "H1": { squareElsIndex: 63, boardArrayIndex: [7, 7] },

};

const whitePieces = [];
const blackPieces = [];

class Pieces {
    constructor(name, color, position) {
        this.name = name
        this.color = color;
        this.position = position
    }
    validDestinations() { }
    isKingInCheck() { }
};

class King extends Pieces {
    constructor(name, color, position) {
        super(name, color, position)
        this.check = false;
    }
    validDestinations() {
        const moveStartArrayIndex = notationMap[moveStart].boardArrayIndex
        const moveDestinationArrayIndex = notationMap[moveDestination].boardArrayIndex

    }

};

class Queen extends Pieces {
    constructor(name, color, position) {
        super(name, color, position)
    }
    validDestinations() {
        const moveStartArrayIndex = notationMap[moveStart].boardArrayIndex
        const moveDestinationArrayIndex = notationMap[moveDestination].boardArrayIndex

    }

};

class Bishop extends Pieces {
    constructor(name, color, position) {
        super(name, color, position)
    }
    validDestinations() {
        const moveStartArrayIndex = notationMap[moveStart].boardArrayIndex
        const moveDestinationArrayIndex = notationMap[moveDestination].boardArrayIndex

    }

};

class Knight extends Pieces {
    constructor(name, color, position) {
        super(name, color, position)
    }
    validDestinations() {
        const moveStartArrayIndex = notationMap[moveStart].boardArrayIndex
        const moveDestinationArrayIndex = notationMap[moveDestination].boardArrayIndex
        if (moveStartArrayIndex[0] + 2 === moveDestinationArrayIndex[0] && moveDestinationArrayIndex[1] + 1 === moveDestinationArrayIndex[1]) {
            //continue
        }
        if (moveStartArrayIndex[0] + 2 === moveDestinationArrayIndex[0] && moveDestinationArrayIndex[1] - 1 === moveDestinationArrayIndex[1]) {
            //continue
        }
        if (moveStartArrayIndex[0] + 1 === moveDestinationArrayIndex[0] && moveDestinationArrayIndex[1] + 2 === moveDestinationArrayIndex[1]) {
            //continue
        }
        if (moveStartArrayIndex[0] + 1 === moveDestinationArrayIndex[0] && moveDestinationArrayIndex[1] - 2 === moveDestinationArrayIndex[1]) {
            //continue
        }
        if (moveStartArrayIndex[0] - 2 === moveDestinationArrayIndex[0] && moveDestinationArrayIndex[1] + 1 === moveDestinationArrayIndex[1]) {
            //continue
        }
        if (moveStartArrayIndex[0] - 2 === moveDestinationArrayIndex[0] && moveDestinationArrayIndex[1] - 1 === moveDestinationArrayIndex[1]) {
            //continue
        }
        if (moveStartArrayIndex[0] - 1 === moveDestinationArrayIndex[0] && moveDestinationArrayIndex[1] + 2 === moveDestinationArrayIndex[1]) {
            //continue
        }
        if (moveStartArrayIndex[0] - 1 === moveDestinationArrayIndex[0] && moveDestinationArrayIndex[1] - 2 === moveDestinationArrayIndex[1]) {
            //continue
        }
        //if moveDestinationArrayIndex has opposing piece, capture
    }

};

class Rook extends Pieces {
    constructor(name, color, position) {
        super(name, color, position)
    }
    validDestinations() {
        const moveStartArrayIndex = notationMap[moveStart].boardArrayIndex
        const moveDestinationArrayIndex = notationMap[moveDestination].boardArrayIndex
        if (moveStartArrayIndex[0] === moveDestinationArrayIndex[0] || moveDestinationArrayIndex[1] === moveDestinationArrayIndex) {
            //continue
        };
    }

};

class Pawn extends Pieces {
    constructor(name, color, position) {
        super(name, color, position)
        this.firstMove = true;
        this.promotion = false;
    }
    validDestinations() {
        const moveStartArrayIndex = notationMap[moveStart].boardArrayIndex
        const moveDestinationArrayIndex = notationMap[moveDestination].boardArrayIndex
        if (this.color === "white") {
            if (this.firstMove === true && moveStartArrayIndex[0] - 2 === moveDestinationArrayIndex[0] && moveStartArrayIndex[1] === moveDestinationArrayIndex[1]) {
                //continue
            }
            if (moveStartArrayIndex[0] - 1 === moveDestinationArrayIndex[0] && moveStartArrayIndex[1] === moveDestinationArrayIndex[1]) {
                //continue
            }
            if (moveStartArrayIndex[0] - 1 && moveStartArrayIndex[1] + 1 && moveStartArrayIndex[1] - 1) //&& moveDestinationArrayIndex has opposing piece
            {
                //take piece
            }
            if (this.color === "black") {
                if (this.firstMove === true && moveStartArrayIndex[0] + 2 === moveDestinationArrayIndex[0] && moveStartArrayIndex[1] === moveDestinationArrayIndex[1]) {
                    //continue
                }
                if (moveStartArrayIndex[0] + 1 === moveDestinationArrayIndex[0] && moveStartArrayIndex[1] === moveDestinationArrayIndex[1]) {
                    //continue
                }
                if (moveStartArrayIndex[0] + 1 && moveStartArrayIndex[1] + 1 && moveStartArrayIndex[1] - 1) //&& moveDestinationArrayIndex has opposing piece
                {
                    //take piece
                }
            }
        }
    }
    isRookEligibleForPromotion() {
        if (moveDestinationArrayIndex[0] === 0 || moveDestinationArrayIndex === 7) {
            this.promotion === true;
            //pick new piece
        }
    }
}

