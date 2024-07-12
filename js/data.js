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