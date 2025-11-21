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
                        cellButton.appendChild(document.querySelector(selector));
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

}