let turnNumber = 0;
let gameFinished = false;
let playerScore = 0;
let computerScore = 0;
let firstPlayer = "❌";
let secondPlayer = "🔵";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const isValidAction = (tile) => {
  return tile.innerText === "";
};

const addContent = (event) => {
  if (gameFinished === false) {
    event.target.innerText = "❌";
  }

  turnNumber++;
};

const computerTurn = (boxes) => {
  if (turnNumber <= 8 && gameFinished === false) {
    let emptyBox = null;
    while (emptyBox === null) {
      const random = getRandomNumber(0, boxes.length - 1);
      if (isValidAction(boxes[random])) {
        emptyBox = boxes[random];
      }
    }
    turnNumber++;
    emptyBox.innerText = "🔵";
  }
};

const doesSomeoneWin = (player) => {
  const whoWonText = document.querySelector(".whoWon");
  const playerName = document.querySelector("#playerName");
  const tiles = document.querySelectorAll(".box");

  if (gameFinished === false) {
    if (
      (tiles[0].innerText === tiles[1].innerText &&
        tiles[0].innerText === tiles[2].innerText &&
        tiles[0].innerText === player) ||
      //
      (tiles[3].innerText === tiles[4].innerText &&
        tiles[3].innerText === tiles[5].innerText &&
        tiles[3].innerText === player) ||
      //
      (tiles[6].innerText === tiles[7].innerText &&
        tiles[6].innerText === tiles[8].innerText &&
        tiles[6].innerText === player) ||
      //
      (tiles[0].innerText === tiles[3].innerText &&
        tiles[0].innerText === tiles[6].innerText &&
        tiles[0].innerText === player) ||
      //
      (tiles[1].innerText === tiles[4].innerText &&
        tiles[1].innerText === tiles[7].innerText &&
        tiles[1].innerText === player) ||
      //
      (tiles[2].innerText === tiles[5].innerText &&
        tiles[2].innerText === tiles[8].innerText &&
        tiles[2].innerText === player) ||
      //
      (tiles[0].innerText === tiles[4].innerText &&
        tiles[0].innerText === tiles[8].innerText &&
        tiles[0].innerText === player) ||
      //
      (tiles[2].innerText === tiles[4].innerText &&
        tiles[2].innerText === tiles[6].innerText &&
        tiles[2].innerText === player)
    ) {
      if (player === "❌") {
        playerScore++;
        whoWonText.innerText = `${playerName.innerText} a gagné !`;
      } else if (player === "🔵") {
        computerScore++;
        whoWonText.innerText = `L'ordinateur a gagné !`;
      }
      gameFinished = true;
    }
  }
};

const reset = () => {
  const whoWonText = document.querySelector(".whoWon");
  const tiles = document.querySelectorAll(".box");
  whoWonText.innerText = "";
  turnNumber = 0;
  gameFinished = false;
  tiles.forEach((box) => (box.innerText = ""));
  chooseWhoPlayFirst();
};

const updateScore = () => {
  const playerScoreText = document.querySelector(".playerScore");
  const computerScoreText = document.querySelector(".computerScore");
  playerScoreText.innerText = playerScore;
  computerScoreText.innerText = computerScore;
};

const drawChecker = () => {
  if (turnNumber === 9 && gameFinished === false) {
    const whoWonText = document.querySelector(".whoWon");
    whoWonText.innerText = `Égalité !`;
    gameFinished = true;
  }
};

const whichButtonWasPressed = (person) => {
  const visible = document.querySelector("#chooseName");
  const displayBox = document.querySelector("#noDisplay");
  const whoPlayFirst = document.querySelector(".whoPlayFirst");
  firstPlayer =
    person; /* If you ask were is defined the variable person, it's on line 46 & 47 of index.html*/
  if (firstPlayer === "🔵") {
    secondPlayer = "❌";
  } else {
    secondPlayer = "🔵";
  }
  visible.style.display = "none";
  whoPlayFirst.style.display = "none";
  displayBox.style.display = "initial";
  turn();
};

const chooseWhoPlayFirst = () => {
  const displayBox = document.querySelector("#noDisplay");
  const whoPlayFirst = document.querySelector(".whoPlayFirst");
  displayBox.style.display = "none";
  whoPlayFirst.style.display = "initial";
};

const turn = () => {
  const tiles = document.querySelectorAll(".box");
  const resetGame = document.querySelector("#gameAndText button");
  const playerName = document
    .querySelector("#playerName")
    .innerText.toUpperCase();
  if (firstPlayer === "🔵") {
    computerTurn(tiles);
  }
  tiles.forEach((box) =>
    box.addEventListener("click", function playerAndComputerTurn(event) {
      if (gameFinished === false) {
        const isValid = isValidAction(event.target);
        if (isValid === false) {
          if (playerName !== "LUCA") {
            return;
          }
        }
        addContent(event);
        doesSomeoneWin("❌");
        computerTurn(tiles);
        doesSomeoneWin("🔵");
        updateScore();
        drawChecker();
      }
    })
  );
  resetGame.addEventListener("click", reset);
};

const chooseName = () => {
  const title = document.querySelector("h1");
  let playerName = document.querySelector("#playerName");
  let name = document.getElementById("name").value;
  if (name.toUpperCase() === "LUCA") {
    playerName.className = `luca`;
    title.className = `luca`;
    title.innerText = "CHEAT CODE ACTIVATED";
  } else {
    playerName.className = `red`;
  }
  playerName.innerText = `${name}`;

  chooseWhoPlayFirst();
};
