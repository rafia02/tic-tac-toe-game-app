
const ticTacToe = document.getElementById("tic-tac-toe");
const cells = [];
const winnerMessage = document.getElementById("winner-message");
const resetButton = document.getElementById("reset-button");

let currentPlayer = "X";
let winner = null;

// Initialize the game board
for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("inpt");
    ticTacToe.appendChild(cell);
    cells.push(cell);

    cell.addEventListener("click", () => {
        if (!cell.classList.contains("winner") && !cell.textContent) {
            cell.textContent = currentPlayer;
            cell.style.pointerEvents = "none";
            checkWinner();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
}

// Define winning combinations
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to check for a winner
function checkWinner() {
    for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            cells[a].classList.add("winner");
            cells[b].classList.add("winner");
            cells[c].classList.add("winner");
            winner = cells[a].textContent;
            displayWinner(winner);
            return;
        }
    }

    
}

// Function to display the winner
function displayWinner(winner) {
    winnerMessage.textContent = `Player ${winner} wins!`;
}

// Reset the game
resetButton.addEventListener("click", () => {
    cells.forEach((cell) => {
        cell.textContent = "";
        cell.style.pointerEvents = "auto";
        cell.classList.remove("winner");
    });
    winnerMessage.textContent = "";
    winner = null;
    currentPlayer = "X";
});
