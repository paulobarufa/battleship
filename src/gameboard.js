import { Ship } from "./ship";
import { Cell } from "./cell";

export class Gameboard {

    rows = 10;
    columns = 10;
    board = [];
    ships = [];

    constructor() {

        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < columns; j++) {
                board[i].push(new Cell());
            }
        }

        this.ships = [
            new Ship("Carrier", 5),
            new Ship("Battleship", 4),
            new Ship("Cruiser", 3),
            new Ship("Submarine", 3),
            new Ship("Destroyer", 2),
        ]
    }

    receiveAttack(x, y) {
        const attackedCell = this.board[x][y]
        attackedCell.receiveHit();
        if (attackedCell.ship !== null) {
            attackedCell.ship.hit();
        }
    }

    placeShip(x, y, ship, orientation) {
        const j = orientation == "right" ? y : x;
        for (let i=j; i < j + ship.length; i++) {
            this.board[orientation == "right" ? x : i][orientation == "right" ? i : y].setShip(ship);
        }
    }

    allShipSunk() {
        return this.ships.every((ship) => {ship.isSunk()})
    }


}