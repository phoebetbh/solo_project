const actions = ["scissor", "paper", "stone"];

// works for web or with special prompt-sync addon
// function playerSelection() {
//   let playerChoice = prompt("Enter stock or paper or scissors");
//   return playerChoice;
// }

function computerPlay() {
  const actions = ["scissor", "paper", "stone"];
  return (randomAction = actions[Math.floor(Math.random() * actions.length)]);
}

function playRound(playerSelection, computerPlay) {
  console.log(`Computer choose ${computerPlay}`);
  if (computerPlay === "stone" && playerSelection === "scissor") {
    return "Computer wins";
  } else if (computerPlay === "paper" && playerSelection === "stone") {
    return "Player wins";
  } else if (computerPlay === "scissor" && playerSelection === "paper") {
    return "Computer wins";
  } else if (playerSelection === "stone" && computerPlay === "scissor") {
    return "Computer wins";
  } else if (playerSelection === "paper" && computerPlay === "stone") {
    return "Player wins";
  } else if (playerSelection === "scissor" && computerPlay === "paper") {
    return "Player wins";
  } else if (!actions.includes(playerSelection)) {
    return "Invalid action, please try again!";
  } else {
    return "Draw";
  }
}

const computerSelection = computerPlay(); //call the function after the invoking program
const playerChoice = process.argv[2]; //first argument command prompt (user key-in the input)
console.log(playRound(playerChoice, computerSelection));
console.log(process.argv[1]); //index 1 argument is the path of js
console.log(process.argv[0]); //index 0 argument is node.js path, so first argument(user input = process.argv[2])
