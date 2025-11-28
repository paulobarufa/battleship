import { HTMLwriter } from "./htmlwriter";
import { Player } from "./player";

/* 
Game status:
0 - picking phase
1 - player turn
2 - computer turn
*/
export class GameController {

    constructor() {
        this.humanPlayer = new Player(true);
        this.computerPlayer = new Player(false);

        this.status = 0;

        HTMLwriter.generateGrid(this.humanPlayer, this)
        HTMLwriter.generateGrid(this.computerPlayer, this)

        HTMLwriter.generateShips(this.humanPlayer.getShips())

        HTMLwriter.log("Place your ships by dragging them and clicking them to rotate. Use the button to start the game.")

        document.querySelector(".confirm").addEventListener("click", () => {this.placeShips()});
    }

    validateShipPositions() {

        const shipDivs = document.querySelectorAll(".player-ship")
        let locationArray = []

        for (const ship of shipDivs) {
            const col = parseInt(ship.dataset.col);
            const row = parseInt(ship.dataset.row);
            const length = parseInt(ship.dataset.length);
            const orientation = ship.dataset.orientation;

            if (col + length > 10 && orientation == "right") return false;
            if (row + length > 10 && orientation == "down") return false;

            if (orientation == "right") {
                for (let i = col; i < col+length; i++) {
                    locationArray.push(JSON.stringify([row, i]))
                }
            } else {
                for (let i = row; i < row+length; i++) {
                    locationArray.push(JSON.stringify([i, col]))
                }
            }
        }

        return new Set(locationArray).size == locationArray.length;
        
    }

    placeShips() {
        if (this.validateShipPositions()) {
            document.querySelector(".confirm").style.display = "none";

            const shipDivs = document.querySelectorAll(".player-ship")

            for (const ship of shipDivs) {
                const col = parseInt(ship.dataset.col);
                const row = parseInt(ship.dataset.row);
                const index = parseInt(ship.dataset.id);
                const orientation = ship.dataset.orientation;

                this.humanPlayer.placeShip(col, row, index, orientation)
            }
            this.status = 1;

            this.computerPlayer.computerPlaceShips();

            HTMLwriter.generateGrid(this.humanPlayer, this);
            HTMLwriter.generateGrid(this.computerPlayer, this);

        } else {
            HTMLwriter.log("Ships must be placed inside the gameboard, and must not overlap each other.")
        }
    }

    playerAttack(row, col) {
        const cell = this.computerPlayer.receiveAttack(row, col);
        if (cell == null) {
            HTMLwriter.log(`Your attack on ${String.fromCharCode(65 + row) + (col + 1).toString()} has missed. It is your opponent's turn.`)
            //this.status = 2;
        } else if (cell.isSunk()) {
            HTMLwriter.log(`BOSH! Your attack on ${String.fromCharCode(65 + row) + (col + 1).toString()} has SUNK your opponent's ${cell.name}. It is your turn again.`)
        } else {
            HTMLwriter.log(`Your attack on ${String.fromCharCode(65 + row) + (col + 1).toString()} hit your opponent's ${cell.name}. It is your turn again.`)
        }
        HTMLwriter.generateGrid(this.computerPlayer, this);
    }

}
