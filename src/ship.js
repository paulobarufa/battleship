export class Ship {

    sunk = false;
    hits = 0;
    length;

    constructor(name, length) {
        this.length = length;
        this.name = name;
    }

    hit() {
        this.hits++;
        this.sunk = this.isSunk();
    }

    isSunk() {
        return this.hits >= this.length;
    }
}