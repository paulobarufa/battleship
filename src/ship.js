export class Ship {

    sunk = false;
    hits = 0;
    length;

    constructor(name, length) {
        this.length = length;
    }

    hit() {
        this.hits++;
        if (this.isSunk()) {
            this.sunk = true;
        }
    }

    isSunk() {
        return this.hits >= this.length;
    }
}