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

    "8A": { squareElsIndex: 0, boardArrayIndex: [0][0] },
    "8B": { squareElsIndex: 1, boardArrayIndex: [0][1] },
    "8C": { squareElsIndex: 2, boardArrayIndex: [0][2] },
    "8D": { squareElsIndex: 3, boardArrayIndex: [0][3] },
    "8E": { squareElsIndex: 4, boardArrayIndex: [0][4] },
    "8F": { squareElsIndex: 5, boardArrayIndex: [0][5] },
    "8G": { squareElsIndex: 6, boardArrayIndex: [0][6] },
    "8H": { squareElsIndex: 7, boardArrayIndex: [0][7] },
    "7A": { squareElsIndex: 8, boardArrayIndex: [1][0] },
    "7B": { squareElsIndex: 9, boardArrayIndex: [1][1] },
    "7C": { squareElsIndex: 10, boardArrayIndex: [1][2] },
    "7D": { squareElsIndex: 11, boardArrayIndex: [1][3] },
    "7E": { squareElsIndex: 12, boardArrayIndex: [1][4] },
    "7F": { squareElsIndex: 13, boardArrayIndex: [1][5] },
    "7G": { squareElsIndex: 14, boardArrayIndex: [1][6] },
    "7H": { squareElsIndex: 15, boardArrayIndex: [1][7] },
    "6A": { squareElsIndex: 16, boardArrayIndex: [2][0] },
    "6B": { squareElsIndex: 17, boardArrayIndex: [2][1] },
    "6C": { squareElsIndex: 18, boardArrayIndex: [2][2] },
    "6D": { squareElsIndex: 19, boardArrayIndex: [2][3] },
    "6E": { squareElsIndex: 20, boardArrayIndex: [2][4] },
    "6F": { squareElsIndex: 21, boardArrayIndex: [2][5] },
    "6G": { squareElsIndex: 22, boardArrayIndex: [2][6] },
    "6H": { squareElsIndex: 23, boardArrayIndex: [2][7] },
    "5A": { squareElsIndex: 24, boardArrayIndex: [3][0] },
    "5B": { squareElsIndex: 25, boardArrayIndex: [3][1] },
    "5C": { squareElsIndex: 26, boardArrayIndex: [3][2] },
    "5D": { squareElsIndex: 27, boardArrayIndex: [3][3] },
    "5E": { squareElsIndex: 28, boardArrayIndex: [3][4] },
    "5F": { squareElsIndex: 29, boardArrayIndex: [3][5] },
    "5G": { squareElsIndex: 30, boardArrayIndex: [3][6] },
    "5H": { squareElsIndex: 31, boardArrayIndex: [3][7] },
    "4A": { squareElsIndex: 32, boardArrayIndex: [4][0] },
    "4B": { squareElsIndex: 33, boardArrayIndex: [4][1] },
    "4C": { squareElsIndex: 34, boardArrayIndex: [4][2] },
    "4D": { squareElsIndex: 35, boardArrayIndex: [4][3] },
    "4E": { squareElsIndex: 36, boardArrayIndex: [4][4] },
    "4F": { squareElsIndex: 37, boardArrayIndex: [4][5] },
    "4G": { squareElsIndex: 38, boardArrayIndex: [4][6] },
    "4H": { squareElsIndex: 39, boardArrayIndex: [4][7] },
    "3A": { squareElsIndex: 40, boardArrayIndex: [5][0] },
    "3B": { squareElsIndex: 41, boardArrayIndex: [5][1] },
    "3C": { squareElsIndex: 42, boardArrayIndex: [5][2] },
    "3D": { squareElsIndex: 43, boardArrayIndex: [5][3] },
    "3E": { squareElsIndex: 44, boardArrayIndex: [5][4] },
    "3F": { squareElsIndex: 45, boardArrayIndex: [5][5] },
    "3G": { squareElsIndex: 46, boardArrayIndex: [5][6] },
    "3H": { squareElsIndex: 47, boardArrayIndex: [5][7] },
    "2A": { squareElsIndex: 48, boardArrayIndex: [6][0] },
    "2B": { squareElsIndex: 49, boardArrayIndex: [6][1] },
    "2C": { squareElsIndex: 50, boardArrayIndex: [6][2] },
    "2D": { squareElsIndex: 51, boardArrayIndex: [6][3] },
    "2E": { squareElsIndex: 52, boardArrayIndex: [6][4] },
    "2F": { squareElsIndex: 53, boardArrayIndex: [6][5] },
    "2G": { squareElsIndex: 54, boardArrayIndex: [6][6] },
    "2H": { squareElsIndex: 55, boardArrayIndex: [6][7] },
    "1A": { squareElsIndex: 56, boardArrayIndex: [7][0] },
    "1B": { squareElsIndex: 57, boardArrayIndex: [7][1] },
    "1C": { squareElsIndex: 58, boardArrayIndex: [7][2] },
    "1D": { squareElsIndex: 59, boardArrayIndex: [7][3] },
    "1E": { squareElsIndex: 60, boardArrayIndex: [7][4] },
    "1F": { squareElsIndex: 61, boardArrayIndex: [7][5] },
    "1G": { squareElsIndex: 62, boardArrayIndex: [7][6] },
    "1H": { squareElsIndex: 63, boardArrayIndex: [7][7] },

}

const whitePieces = [];
const blackPieces = [];

class Pieces {
    constructor(name, position) {
        this.name = name
        this.position = position
    }
    validDestinations() { }
    isKingInCheck() { }
};

class King extends Pieces {
    constructor(name, position) {
        super(name, position)
        this.check = false;
    }
    validDestinations() { }

};

class Queen extends Pieces {
    constructor(name, position) {
        super(name, position)
    }
    validDestinations() { }

};

class Bishop extends Pieces {
    constructor(name, position) {
        super(name, position)
    }
    validDestinations() { }

};

class Knight extends Pieces {
    constructor(name, position) {
        super(name, position)
    }
    validDestinations() { }

};

class Rook extends Pieces {
    constructor(name, position) {
        super(name, position)
    }
    validDestinations() { }

};

class Pawn extends Pieces {
    constructor(name, position) {
        super(name, position)
        this.firstMove = true;
        this.promotion = false;
    }
    validDestinations() { }
    isRookEligibleForPromotion() { }

};

