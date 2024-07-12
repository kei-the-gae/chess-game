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

const notationMap = [

    { id: "8A", squareElsIndex: "0", boardArrayIndex: [0, 0] },
    { id: "8B", squareElsIndex: "1", boardArrayIndex: [0, 1] },
    { id: "8C", squareElsIndex: "2", boardArrayIndex: [0, 2] },
    { id: "8D", squareElsIndex: "3", boardArrayIndex: [0, 3] },
    { id: "8E", squareElsIndex: "4", boardArrayIndex: [0, 4] },
    { id: "8F", squareElsIndex: "5", boardArrayIndex: [0, 5] },
    { id: "8G", squareElsIndex: "6", boardArrayIndex: [0, 6] },
    { id: "8H", squareElsIndex: "7", boardArrayIndex: [0, 7] },
    { id: "7A", squareElsIndex: "8", boardArrayIndex: [1, 0] },
    { id: "7B", squareElsIndex: "9", boardArrayIndex: [1, 1] },
    { id: "7C", squareElsIndex: "10", boardArrayIndex: [1, 2] },
    { id: "7D", squareElsIndex: "11", boardArrayIndex: [1, 3] },
    { id: "7E", squareElsIndex: "12", boardArrayIndex: [1, 4] },
    { id: "7F", squareElsIndex: "13", boardArrayIndex: [1, 5] },
    { id: "7G", squareElsIndex: "14", boardArrayIndex: [1, 6] },
    { id: "7H", squareElsIndex: "15", boardArrayIndex: [1, 7] },
    { id: "6A", squareElsIndex: "16", boardArrayIndex: [2, 0] },
    { id: "6B", squareElsIndex: "17", boardArrayIndex: [2, 1] },
    { id: "6C", squareElsIndex: "18", boardArrayIndex: [2, 2] },
    { id: "6D", squareElsIndex: "19", boardArrayIndex: [2, 3] },
    { id: "6E", squareElsIndex: "20", boardArrayIndex: [2, 4] },
    { id: "6F", squareElsIndex: "21", boardArrayIndex: [2, 5] },
    { id: "6G", squareElsIndex: "22", boardArrayIndex: [2, 6] },
    { id: "6H", squareElsIndex: "23", boardArrayIndex: [2, 7] },
    { id: "5A", squareElsIndex: "24", boardArrayIndex: [3, 0] },
    { id: "5B", squareElsIndex: "25", boardArrayIndex: [3, 1] },
    { id: "5C", squareElsIndex: "26", boardArrayIndex: [3, 2] },
    { id: "5D", squareElsIndex: "27", boardArrayIndex: [3, 3] },
    { id: "5E", squareElsIndex: "28", boardArrayIndex: [3, 4] },
    { id: "5F", squareElsIndex: "29", boardArrayIndex: [3, 5] },
    { id: "5G", squareElsIndex: "30", boardArrayIndex: [3, 6] },
    { id: "5H", squareElsIndex: "31", boardArrayIndex: [3, 7] },
    { id: "4A", squareElsIndex: "32", boardArrayIndex: [4, 0] },
    { id: "4B", squareElsIndex: "33", boardArrayIndex: [4, 1] },
    { id: "4C", squareElsIndex: "34", boardArrayIndex: [4, 2] },
    { id: "4D", squareElsIndex: "35", boardArrayIndex: [4, 3] },
    { id: "4E", squareElsIndex: "36", boardArrayIndex: [4, 4] },
    { id: "4F", squareElsIndex: "37", boardArrayIndex: [4, 5] },
    { id: "4G", squareElsIndex: "38", boardArrayIndex: [4, 6] },
    { id: "4H", squareElsIndex: "39", boardArrayIndex: [4, 7] },
    { id: "3A", squareElsIndex: "40", boardArrayIndex: [5, 0] },
    { id: "3B", squareElsIndex: "41", boardArrayIndex: [5, 1] },
    { id: "3C", squareElsIndex: "42", boardArrayIndex: [5, 2] },
    { id: "3D", squareElsIndex: "43", boardArrayIndex: [5, 3] },
    { id: "3E", squareElsIndex: "44", boardArrayIndex: [5, 4] },
    { id: "3F", squareElsIndex: "45", boardArrayIndex: [5, 5] },
    { id: "3G", squareElsIndex: "46", boardArrayIndex: [5, 6] },
    { id: "3H", squareElsIndex: "47", boardArrayIndex: [5, 7] },
    { id: "2A", squareElsIndex: "48", boardArrayIndex: [6, 0] },
    { id: "2B", squareElsIndex: "49", boardArrayIndex: [6, 1] },
    { id: "2C", squareElsIndex: "50", boardArrayIndex: [6, 2] },
    { id: "2D", squareElsIndex: "51", boardArrayIndex: [6, 3] },
    { id: "2E", squareElsIndex: "52", boardArrayIndex: [6, 4] },
    { id: "2F", squareElsIndex: "53", boardArrayIndex: [6, 5] },
    { id: "2G", squareElsIndex: "54", boardArrayIndex: [6, 6] },
    { id: "2H", squareElsIndex: "55", boardArrayIndex: [6, 7] },
    { id: "1A", squareElsIndex: "56", boardArrayIndex: [7, 0] },
    { id: "1B", squareElsIndex: "57", boardArrayIndex: [7, 1] },
    { id: "1C", squareElsIndex: "58", boardArrayIndex: [7, 2] },
    { id: "1D", squareElsIndex: "59", boardArrayIndex: [7, 3] },
    { id: "1E", squareElsIndex: "60", boardArrayIndex: [7, 4] },
    { id: "1F", squareElsIndex: "61", boardArrayIndex: [7, 5] },
    { id: "1G", squareElsIndex: "62", boardArrayIndex: [7, 6] },
    { id: "1H", squareElsIndex: "63", boardArrayIndex: [7, 7] },

];

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

