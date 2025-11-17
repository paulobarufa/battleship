import { Gameboard } from "./gameboard"

export class Player {

    moveHistory = []

    constructor(real) {
        this.board = new Gameboard();
        this.real = real;
    }

    generateAttack() {

    }

    getRandomAttack() {
        let attack = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
        while (this.arrayContains(this.moveHistory, attack)) {
            attack = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
        }
        return attack;
    }

    arrayContains(arr1, arr2){
        if(JSON.stringify(arr1).includes(JSON.stringify(arr2))) return true;
        return false;
    }
}