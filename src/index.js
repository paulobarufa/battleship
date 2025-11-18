import { HTMLwriter } from "./htmlwriter";
import { Player } from "./player";
import "./styles.css";

const humanPlayer = new Player(true);

const playerBoard = humanPlayer.board;
const ships = playerBoard.ships;

playerBoard.placeShip(0, 0, ships[0], "right")
playerBoard.placeShip(2, 2, ships[1], "right")
playerBoard.placeShip(4, 4, ships[2], "down")
playerBoard.placeShip(6, 6, ships[3], "right")
playerBoard.placeShip(8, 8, ships[4], "right")

HTMLwriter.generateGrid(humanPlayer)