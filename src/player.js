import { Gameboard } from "./gameboard"

export class Player {

    moveHistory = []

    constructor(real) {
        this.board = new Gameboard();
        this.real = real;
    }

    getGrid() {
        return this.board.board;
    }

    getShips() {
        return this.board.ships;
    }

    receiveAttack(row, col) {
        return this.board.receiveAttack(row, col);
    }

    getRandomAttack() {
        let attack = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
        while (this.arrayContains(this.moveHistory, attack)) {
            attack = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
        }
        this.moveHistory[this.moveHistory.length] = attack;
        return attack;
    }

    validatePosition(row, col, orientation, length) {
        const board = this.getGrid();
        if (col + length > 10 && orientation == "right") return false;
        if (row + length > 10 && orientation == "down") return false;
        if (orientation == "right") {
            for (let i = col; i < col+length; i++) {
                if (board[row][i].hasShip()) return false;
            }
            if (row > 0) {
                for (let i = col; i < col+length; i++) {
                    if (board[row-1][i].hasShip()) return false;
                }
            }
            if (row < 9) {
                for (let i = col; i < col+length; i++) {
                    if (board[row+1][i].hasShip()) return false;
                }
            }
            if (col > 0 && board[row][col-1].hasShip()) return false;
            if (col < 9 && board[row][col+1].hasShip()) return false;
        } else {
            for (let i = row; i < row+length; i++) {
                if (board[i][col].hasShip()) return false;
            }
            if (col > 0) {
                for (let i = row; i < row+length; i++) {
                    if (board[i][col-1].hasShip()) return false;
                }
            }
            if (col < 9) {
                for (let i = row; i < row+length; i++) {
                    if (board[i][col+1].hasShip()) return false;
                }
            }
            if (row > 0 && board[row-1][col].hasShip()) return false;
            if (row < 9 && board[row+1][col].hasShip()) return false;
        }
        return true;
    }

    arrayContains(arr1, arr2){
        if(JSON.stringify(arr1).includes(JSON.stringify(arr2))) return true;
        return false;
    }

    computerPlaceShips() {
        const orientationArray = ["right", "down"]
        
        for (const ship of this.getShips()) {
            
            let position = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
            let orientation = orientationArray[Math.round(Math.random())]

            while(!this.validatePosition(position[1], position[0], orientation, ship.length)) {
                position = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
                orientation = orientationArray[Math.round(Math.random())]
            }

            this.placeShip(position[0], position[1], ship, orientation)
        }
    }

    placeShip(col, row, index, orientation) {
        this.board.placeShip(col, row, index, orientation);
    }
}