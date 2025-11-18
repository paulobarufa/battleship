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
            letterCell.textContent = String.fromCharCode(65 + i);
            boardDiv.appendChild(letterCell);
        }
        
        // Render board squares
        board.forEach((row, rowindex) => {

            const numberCell = document.createElement("div");
            numberCell.classList.add("label-cell");
            numberCell.textContent = rowindex + 1;
            boardDiv.appendChild(numberCell);

            row.forEach((cell, colindex) => {
                
                const cellButton = document.createElement("button");
                cellButton.classList.add("cell");

                if(!player.real) cellButton.classList.add("computer-cell");
                
                cellButton.dataset.row = rowindex;
                cellButton.dataset.column = colindex;
                
                if (cell.hit && cell.ship == null) cellButton.classList.add("miss");
                if (cell.hit && cell.ship !== null) cellButton.classList.add("hit");

                boardDiv.appendChild(cellButton);
            })
        })

    }

}