const board = [
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
    ["R1", "K1", "B1", "Q1", "K1", "B2", "K2", "R2"],
    ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8"],
    ["R1", "K1", "B1", "Q1", "K1", "B2", "K2", "R2"],
    // white start
];

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

