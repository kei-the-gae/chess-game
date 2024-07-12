const board = [
    // black start
    ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
    ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
    ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
    // white start
];

class Pieces {
    constructor() {

    }
    validDestinations() { }
    isKingInCheck() { }
};

class King extends Pieces {
    constructor() {

    }
    validDestinations() { }

};

class Queen extends Pieces {
    constructor() {

    }
    validDestinations() { }

};

class Bishop extends Pieces {
    constructor() {

    }
    validDestinations() { }

};

class Knight extends Pieces {
    constructor() {

    }
    validDestinations() { }

};

class Rook extends Pieces {
    constructor() {

    }
    validDestinations() { }

};

class Pawn extends Pieces {
    constructor() {

    }
    validDestinations() { }
    isRookEligibleForPromotion() { }

};