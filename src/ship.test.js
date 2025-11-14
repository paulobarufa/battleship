import { Ship } from "./ship";

test("Sunk ship", () => {
    const ship = new Ship(3)
    ship.hit()
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBeTruthy()
})

test("Not sunk ship", () => {
    const ship = new Ship(3)
    ship.hit()
    ship.hit()
    expect(ship.isSunk()).toBeFalsy()
})