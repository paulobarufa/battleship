import { HTMLwriter } from "./htmlwriter";
import { Player } from "./player";
import "./styles.css";

const humanPlayer = new Player(true);

const playerBoard = humanPlayer.board;
const ships = playerBoard.ships;

/*
playerBoard.placeShip(0, 0, ships[0], "right")
playerBoard.placeShip(2, 2, ships[1], "right")
playerBoard.placeShip(4, 4, ships[2], "down")
playerBoard.placeShip(6, 6, ships[3], "right")
playerBoard.placeShip(8, 8, ships[4], "right")
*/


HTMLwriter.generateGrid(humanPlayer)

const ship1 = document.createElement("div")
ship1.classList.add("player-ship")
ship1.style.position = "absolute";
ship1.style.height = "1.85em"
ship1.style.width = "10em"
ship1.dataset.orientation = "right"
ship1.dataset.row = "0"
ship1.dataset.col = "1"
ship1.dataset.id = "0"
ship1.style.paddingRight = "10px"
ship1.draggable = true;
document.querySelector(".player-board > .cell[data-row='0'][data-col='1']").appendChild(ship1)

ship1.addEventListener("dragstart", (e) => {
    e.dataTransfer.setDragImage(ship1, 15, 15);
    e.dataTransfer.setData("selector", ".player-ship[data-id='0']")
})

ship1.addEventListener("drag", () => {
    ship1.classList.add("beingDragged");
})

ship1.addEventListener("dragend", () => {
    ship1.classList.remove("beingDragged");
})

ship1.addEventListener("drop", (e) => {
    e.preventDefault();
});

const ship2 = document.createElement("div")
ship2.classList.add("player-ship")
ship2.style.position = "absolute";
ship2.style.height = "1.85em"
ship2.style.width = "8em"
ship2.dataset.orientation = "right"
ship2.dataset.x = "2"
ship2.dataset.y = "2"
ship2.style.paddingRight = "7px"
ship2.draggable = true;
document.querySelector(".player-board > .cell[data-row='2'][data-col='2']").appendChild(ship2)

const ship3 = document.createElement("div")
ship3.classList.add("player-ship")
ship3.style.position = "absolute";
ship3.style.height = "1.85em"
ship3.style.width = "6em"
ship3.dataset.orientation = "right"
ship3.dataset.x = "5"
ship3.dataset.y = "0"
ship3.style.paddingRight = "5px"
ship3.draggable = true;
document.querySelector(".player-board > .cell[data-row='5'][data-col='0']").appendChild(ship3)

const ship4 = document.createElement("div")
ship4.classList.add("player-ship")
ship4.style.position = "absolute";
ship4.style.height = "6em"
ship4.style.width = "1.85em"
ship4.dataset.orientation = "down"
ship4.dataset.x = "5"
ship4.dataset.y = "7"
ship4.style.paddingBottom = "5px"
ship4.draggable = true;
document.querySelector(".player-board > .cell[data-row='5'][data-col='7']").appendChild(ship4)

const ship5 = document.createElement("div")
ship5.classList.add("player-ship")
ship5.style.position = "absolute";
ship5.style.height = "1.85em"
ship5.style.width = "4em"
ship5.dataset.orientation = "right"
ship5.dataset.x = "8"
ship5.dataset.y = "0"
ship5.style.paddingRight = "3px"
ship5.draggable = true;
document.querySelector(".player-board > .cell[data-row='8'][data-col='0']").appendChild(ship5)