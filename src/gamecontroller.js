import { HTMLwriter } from "./htmlwriter";

/* 
Game status:
0 - picking phase
1 - player turn
2 - computer turn
*/
export class GameController {

    constructor() {

    }

    static validateShipPositions() {

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

}
