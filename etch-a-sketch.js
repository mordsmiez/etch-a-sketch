let grid = document.querySelector("div.container");

function createGrid(x) {
    grid.replaceChildren();
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
    
    let numberOfSquares = prompt("How many squares(²) would you like your grid to have? Please enter a number between 1 and 100.");
    if (numberOfSquares > 1 && numberOfSquares < 101){
        createGrid(numberOfSquares);
    }
    else {
        alert("Please enter a number between 1 and 100.")
    }
})



