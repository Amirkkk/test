function getComputerChoice(randomPick, randomNumber) {
  randomPick = ["Rock","Paper","Scissors"];
  randomNumber = Math.floor(Math.random() * 3);
  return(randomPick[randomNumber])
}

function getPlayerChoice(playerPick, playerPickItems) {
  playerPickItems = ["Rock","Paper","Scissors"];
  playerPick = prompt("Make your choice:");

    if (playerPick === playerPickItems[0]) {
      return(playerPickItems[0])
    } else if (playerPick === playerPickItems[1]) {
      return(playerPickItems[1])
    }else if (playerPick === playerPickItems[2]) {
      return(playerPickItems[2])
    }
}

function game() {
  var playerScore = 0;
  var computerScore = 0;
  for (let i = 0; i < 5; i++) {
    console.log('Round ' + (i + 1));
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const round = getPlayRound(playerSelection, computerSelection);
    console.log(round);
    console.log("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);
    if (round === "Computer Wins") {
      computerScore = computerScore + 1;
      console.log(computerScore);
    } else if (round === "Player Wins") {
      playerScore = playerScore + 1;
      console.log(playerScore);
    }
    }
    if (computerScore > playerScore) {
      console.log("Computer Won!");
    } else if (computerScore < playerScore) {
      console.log("Player Won!");
    } else {
      console.log("TIE!");
    console.log("\n");
  }
}
game();



//сделать счетчик раундов
//сделать итогового победителя


function getPlayRound(playerSelection, computerSelection,computerScore,playerScore) {
  if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return ("Computer Wins");
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return ("Computer Wins");
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return ("Computer Wins");
  }

  if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return ("Player Wins");
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return ("Player Wins");
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return ("Player Wins");
  }

  if (playerSelection === "Scissors" && computerSelection === "Scissors") {
    return("Tie");
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    return("Tie");
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return("Tie");
  }
}
