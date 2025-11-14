export class Cell {

    ship = null;

    constructor() {
        this.hit = false;
    }

    setShip(ship) {
        this.ship = ship;
    }

    receiveHit() {
        this.hit = true;
    }
    
}