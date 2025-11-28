import { HTMLwriter } from "./htmlwriter";
import { GameController } from "./gamecontroller";
import { Player } from "./player";
import "./styles.css";

let gameController = new GameController();

const restartButton = document.querySelector(".restart")
const modal = document.querySelector("#modal")

restartButton.addEventListener("click", () => {
    modal.style.display = "none";
    HTMLwriter.cleanRestart();
    gameController = new GameController();
})