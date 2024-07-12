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

    "8A": 0,
    "8B": 1,
    "8C": 2,
    "8D": 3,
    "8E": 4,
    "8F": 5,
    "8G": 6,
    "8H": 7,
    "7A": 8,
    "7B": 9,
    "7C": 10,
    "7D": 11,
    "7E": 12,
    "7F": 13,
    "7G": 14,
    "7H": 15,
    "6A": 16,
    "6B": 17,
    "6C": 18,
    "6D": 19,
    "6E": 20,
    "6F": 21,
    "6G": 22,
    "6H": 23,
    "5A": 24,
    "5B": 25,
    "5C": 26,
    "5D": 27,
    "5E": 28,
    "5F": 29,
    "5G": 30,
    "5H": 31,
    "4A": 32,
    "4B": 33,
    "4C": 34,
    "4D": 35,
    "4E": 36,
    "4F": 37,
    "4G": 38,
    "4H": 39,
    "3A": 40,
    "3B": 41,
    "3C": 42,
    "3D": 43,
    "3E": 44,
    "3F": 45,
    "3G": 46,
    "3H": 47,
    "2A": 48,
    "2B": 49,
    "2C": 50,
    "2D": 51,
    "2E": 52,
    "2F": 53,
    "2G": 54,
    "2H": 55,
    "1A": 56,
    "1B": 57,
    "1C": 58,
    "1D": 59,
    "1E": 60,
    "1F": 61,
    "1G": 62,
    "1H": 63,

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

