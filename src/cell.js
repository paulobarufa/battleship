export class Cell {

    ship = null;

    constructor() {
        this.hit = false;
    }

    setShip(ship) {
        this.ship = ship;
    }

    hasShip() {
        return this.ship !== null;
    }

    receiveHit() {
        this.hit = true;
    }
    
}