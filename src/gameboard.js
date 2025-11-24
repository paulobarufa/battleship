import { Ship } from "./ship";
import { Cell } from "./cell";

export class Gameboard {

    rows = 10;
    columns = 10;
    board = [];
    ships = [];

    constructor() {

        for (let i = 0; i < this.rows; i++) {
            this.board[i] = [];
            for (let j = 0; j < this.columns; j++) {
                this.board[i].push(new Cell());
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

    placeShip(col, row, ship, orientation) {
        const j = orientation == "right" ? col : row;
        for (let i=j; i < j + ship.length; i++) {
            this.board[orientation == "right" ? i : col][orientation == "right" ? row : i].setShip(ship);
        }
    }

    allShipSunk() {
        return this.ships.every((ship) => {return ship.isSunk()})
    }


}