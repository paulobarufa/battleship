import { Gameboard } from "./gameboard";

test("Sunk ship", () => {
    const board = new Gameboard()

    board.placeShip(0, 0, board.ships[0], "right")
    board.placeShip(0, 1, board.ships[1], "right")
    board.placeShip(0, 2, board.ships[2], "right")
    board.placeShip(0, 3, board.ships[3], "right")
    board.placeShip(0, 4, board.ships[4], "right")

    board.receiveAttack(0,4)
    board.receiveAttack(1,4)

    expect(board.ships[4].isSunk()).toBeTruthy()
})

test("Sunk ship DOWN", () => {
    const board = new Gameboard()

    board.placeShip(0, 0, board.ships[0], "right")
    board.placeShip(0, 1, board.ships[1], "right")
    board.placeShip(0, 2, board.ships[2], "right")
    board.placeShip(0, 3, board.ships[3], "right")
    board.placeShip(0, 4, board.ships[4], "down")

    board.receiveAttack(0,4)
    board.receiveAttack(0,5)

    expect(board.ships[4].isSunk()).toBeTruthy()
})

test("Sunk big ship", () => {
    const board = new Gameboard()

    board.placeShip(0, 0, board.ships[0], "right")
    board.placeShip(0, 1, board.ships[1], "right")
    board.placeShip(0, 2, board.ships[2], "right")
    board.placeShip(0, 3, board.ships[3], "right")
    board.placeShip(0, 4, board.ships[4], "down")

    board.receiveAttack(0,0)
    board.receiveAttack(1,0)
    board.receiveAttack(2,0)
    board.receiveAttack(3,0)
    board.receiveAttack(4,0)

    expect(board.ships[0].isSunk()).toBeTruthy()
})

test("Not sunk big ship", () => {
    const board = new Gameboard()

    board.placeShip(0, 0, board.ships[0], "right")
    board.placeShip(0, 1, board.ships[1], "right")
    board.placeShip(0, 2, board.ships[2], "right")
    board.placeShip(0, 3, board.ships[3], "right")
    board.placeShip(0, 4, board.ships[4], "down")

    board.receiveAttack(0,0)
    board.receiveAttack(1,0)
    board.receiveAttack(2,0)
    board.receiveAttack(3,0)
    board.receiveAttack(5,0)

    expect(board.ships[0].isSunk()).toBeFalsy()
})

test("Sunk all ships", () => {
    const board = new Gameboard()

    board.placeShip(0, 0, board.ships[0], "right")
    board.placeShip(0, 1, board.ships[1], "right")
    board.placeShip(0, 2, board.ships[2], "right")
    board.placeShip(0, 3, board.ships[3], "right")
    board.placeShip(0, 4, board.ships[4], "down")

    board.receiveAttack(0,0)
    board.receiveAttack(1,0)
    board.receiveAttack(2,0)
    board.receiveAttack(3,0)
    board.receiveAttack(4,0)

    board.receiveAttack(0,1)
    board.receiveAttack(1,1)
    board.receiveAttack(2,1)
    board.receiveAttack(3,1)

    board.receiveAttack(0,2)
    board.receiveAttack(1,2)
    board.receiveAttack(2,2)

    board.receiveAttack(0,3)
    board.receiveAttack(1,3)
    board.receiveAttack(2,3)

    board.receiveAttack(0,4)
    board.receiveAttack(0,5)

    expect(board.allShipSunk()).toBeTruthy()
})

test("Not sunk all ships", () => {
    const board = new Gameboard()

    board.placeShip(0, 0, board.ships[0], "right")
    board.placeShip(0, 1, board.ships[1], "right")
    board.placeShip(0, 2, board.ships[2], "right")
    board.placeShip(0, 3, board.ships[3], "right")
    board.placeShip(0, 4, board.ships[4], "down")

    board.receiveAttack(0,0)

    board.receiveAttack(3,1)

    board.receiveAttack(0,2)
    board.receiveAttack(1,2)
    board.receiveAttack(2,2)

    board.receiveAttack(0,3)
    board.receiveAttack(1,3)
    board.receiveAttack(2,3)

    board.receiveAttack(0,4)
    board.receiveAttack(0,5)

    expect(board.allShipSunk()).toBeFalsy()
})