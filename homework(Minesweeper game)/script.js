const cells = document.querySelector(".cells")
const gameContainer = document.querySelector(".container")
const gameOver = document.querySelector(".gameOverScreen")
const tryAgain = document.querySelector(".gameOverScreen > button")
const score = document.querySelector("span")

let playerScore = 0

let items = []

for (let i=0; i < 100; i++){
    const rnd = Math.round(Math.random()*100)

    if(rnd <= 10){
        items.push("bomb")
    } else{
        items.push("empty")
    }

}

console.log(items)



const createCells = () => {

    items.map((x) => {
        const cell = document.createElement("div");
        cell.classList.add(x);
        cell.addEventListener("click", handleCellClick);
        cells.appendChild(cell);
        cells.style.textAlign = "center"
    });
};

createCells();

function handleCellClick(event) {
    const cell = event.target;
    const cellType = cell.classList[0];

    if (cellType === "bomb") {
        cell.style.backgroundColor = "red";
        cell.innerText = `💣`
        gameContainer.style.display = "none"
    gameOver.style.display = "block"
        gameOver.style.textAlign = "center"


    } else if (cellType === "empty") {
        cell.style.backgroundColor = "green";
        playerScore += 1
        score.innerText = playerScore
    }
}

tryAgain.onclick = () =>{
    console.log("test")
    gameContainer.style.display = "block"
    gameContainer.style.display = "flex"
    gameOver.style.display = "none"
}
