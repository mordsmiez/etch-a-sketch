let grid = document.querySelector("div.container");

function createGrid(x) {
    for (let i = 0; i < x; i++){
        const gridRow = document.createElement("div");
        gridRow.textContent = "";
        gridRow.setAttribute("style", "border-style: solid; display: flex; flex: 1; flex-direction: row; border-width: 0.01px;");
        grid.appendChild(gridRow);

        for (let j = 0; j < x; j++){
            const gridSquare = document.createElement("div");
            gridSquare.textContent = "";
            gridSquare.setAttribute("style", "border-style: solid; display: flex; flex: 1; border-width: 0.01px;");    
            gridSquare.addEventListener("mouseenter", (event) => {
                event.preventDefault();
                gridSquare.setAttribute("style", "border-style: solid; display: flex; flex: 1; border-width: 0.01px; background-color: grey;")
            })
            gridRow.appendChild(gridSquare);
        }
    }
    

}

const button = document.querySelector("button");

button.addEventListener("click", (event) => {
    
    let numberOfSquares = 16;
    createGrid(numberOfSquares);
})



