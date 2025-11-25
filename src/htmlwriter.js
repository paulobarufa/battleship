export class HTMLwriter {

    static generateGrid(player) {

        const boardDiv = document.querySelector(player.real ? ".player-board" : ".computer-board");
        boardDiv.innerHTML = "";
        const board = player.getGrid();

        // Render top labels
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("label-cell");
        boardDiv.appendChild(emptyCell);

        for (let i=0; i < 10; i++) {
            const letterCell = document.createElement("div");
            letterCell.classList.add("label-cell");
            letterCell.textContent = i + 1;
            boardDiv.appendChild(letterCell);
        }
        
        // Render board squares
        board.forEach((row, rowindex) => {

            const numberCell = document.createElement("div");
            numberCell.classList.add("label-cell");
            numberCell.textContent = String.fromCharCode(65 + rowindex);
            boardDiv.appendChild(numberCell);

            row.forEach((cell, colindex) => {
                
                const cellButton = document.createElement("div");
                cellButton.classList.add("cell");

                if(!player.real) cellButton.classList.add("computer-cell");

                //if (player.real) {
                    cellButton.addEventListener('drop', (e) => {
                        e.preventDefault();
                        const selector = e.dataTransfer.getData("selector");
                        const ship = document.querySelector(selector);
                        ship.dataset.col = colindex;
                        ship.dataset.row = rowindex;
                        cellButton.appendChild(ship);
                    });

                    cellButton.addEventListener('dragover', (e) => {
                        e.preventDefault();
                    });
                //}
                
                cellButton.dataset.row = rowindex;
                cellButton.dataset.col = colindex;
                
                if (cell.hit && cell.ship == null) cellButton.classList.add("miss");
                if (cell.hit && cell.ship !== null) cellButton.classList.add("hit");

                boardDiv.appendChild(cellButton);
            })
        })

    }

    static generateShips(ships) {

        for (let i=0; i < ships.length; i++) {
            const shipDiv = document.createElement("div");
            const ship = ships[i];

            shipDiv.classList.add("player-ship")
            shipDiv.style.position = "absolute";
            shipDiv.style.height = "1.85em";
            shipDiv.style.width = `${2*ship.length}em`;
            shipDiv.dataset.orientation = "right";
            shipDiv.dataset.col = "1";
            shipDiv.dataset.row = 2*i;
            shipDiv.dataset.length = ship.length;
            shipDiv.dataset.id = i;
            shipDiv.style.paddingRight = `${(2*ship.length)-1}px`;
            shipDiv.draggable = true;

            shipDiv.addEventListener("dragstart", (e) => {
                e.dataTransfer.setDragImage(shipDiv, 15, 15);
                e.dataTransfer.setData("selector", `.player-ship[data-id='${i}']`)
            })
            
            shipDiv.addEventListener("drag", () => {
                shipDiv.classList.add("beingDragged");
            })

            shipDiv.addEventListener("dragend", () => {
                shipDiv.classList.remove("beingDragged");
            })

            shipDiv.addEventListener("drop", (e) => {
                e.preventDefault();
            });

            shipDiv.addEventListener("click", (e) => {
                const orientation = shipDiv.dataset.orientation;
                if (orientation == "right") {
                    shipDiv.style.height = shipDiv.style.width;
                    shipDiv.style.width = "1.85em"
                    shipDiv.dataset.orientation = "down"
                    shipDiv.style.paddingBottom = shipDiv.style.paddingRight
                    shipDiv.style.paddingRight = "0"
                } else {
                    shipDiv.style.width = shipDiv.style.height;
                    shipDiv.style.height = "1.85em"
                    shipDiv.dataset.orientation = "right"
                    shipDiv.style.paddingRight = shipDiv.style.paddingBottom
                    shipDiv.style.paddingBottom = "0"
                }
            })

            document.querySelector(`.player-board > .cell[data-row='${2*i}'][data-col='1']`).appendChild(shipDiv)
        }

    }

}