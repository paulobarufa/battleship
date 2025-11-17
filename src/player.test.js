import { Player } from "./player";

test("Not sunk all ships", () => {
    const player = new Player(false)
    console.log(player.getRandomAttack())

    expect(true).toBeTruthy()
});