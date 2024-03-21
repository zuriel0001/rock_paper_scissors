// JavaScript code for computer mode
function playWithComputer() {
    // Show the computer game page
    showPage("computer");

    // Reset scores and rounds played for a new game
    document.getElementById("playerResult").textContent = "0";
    document.getElementById("computerResult").textContent = "0";
    document.getElementById("roundsPlayed").textContent = "0";

    // Start the game with the computer
    playComputerGame();
}

function playComputerGame() {
    // Variable to check if the game is over
    let gameOver = false;

    // Function to handle a round of the game
    function playRound(playerChoice) {
        // Check if the game is over
        if (gameOver) {
            return;
        }

        // Get the rounds played element
        const roundsPlayedElement = document.getElementById("roundsPlayed");

        // Check if the maximum rounds (5) have been played
        if (parseInt(roundsPlayedElement.textContent) >= 5) {
            // Display the final result for 5 seconds before ending the game
            setTimeout(() => {
                endGame();
            }, 5000);
            return;
        }

        // Get the computer's choice
        const computerChoice = getRandomChoice();

        // Update the choices displayed on the page
        document.getElementById("playerChoice").textContent = playerChoice;
        document.getElementById("computerChoice").textContent = computerChoice;

        // Determine the winner of the round
        const roundResult = determineWinner(playerChoice, computerChoice);

        // Update the round result displayed on the page
        document.getElementById("roundResult").textContent = roundResult;

        // Update the scores based on the round result
        updateScores(roundResult);

        // Increment the rounds played counter
        roundsPlayedElement.textContent = parseInt(roundsPlayedElement.textContent) + 1;

        // Check if the game has ended (e.g., after 5 rounds)
        if (parseInt(roundsPlayedElement.textContent) === 5) {
            // Display the final result for 2 seconds before ending the game
            setTimeout(() => {
                endGame();
            }, 2000);
        }
    }

    // Function to get a random choice for the computer
    function getRandomChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Function to determine the winner of a round
    function determineWinner(playerChoice, computerChoice) {
        switch (playerChoice) {
            case "rock":
                switch (computerChoice) {
                    case "rock":
                        return "It's a tie!";
                    case "paper":
                        return "Computer wins! Paper beats rock.";
                    case "scissors":
                        return "You win! Rock beats scissors.";
                }
                break;
            case "paper":
                switch (computerChoice) {
                    case "rock":
                        return "You win! Paper beats rock.";
                    case "paper":
                        return "It's a tie!";
                    case "scissors":
                        return "Computer wins! Scissors beats paper.";
                }
                break;
            case "scissors":
                switch (computerChoice) {
                    case "rock":
                        return "Computer wins! Rock beats scissors.";
                    case "paper":
                        return "You win! Scissors beats paper.";
                    case "scissors":
                        return "It's a tie!";
                }
                break;
        }
    }

    // Function to capitalize the first letter of a string
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Function to update scores based on the round result
    function updateScores(roundResult) {
        const playerScoreElement = document.getElementById("playerResult");
        const computerScoreElement = document.getElementById("computerResult");

        if (roundResult.startsWith("You win")) {
            playerScoreElement.textContent = parseInt(playerScoreElement.textContent) + 1;
        } else if (roundResult.startsWith("Computer wins")) {
            computerScoreElement.textContent = parseInt(computerScoreElement.textContent) + 1;
        }
    }

    // Function to end the game and display the final result in a popup screen
    function endGame() {
        const playerScore = parseInt(document.getElementById("playerResult").textContent);
        const computerScore = parseInt(document.getElementById("computerResult").textContent);

        // Determine the overall winner
        let overallWinner;
        if (playerScore === computerScore) {
            overallWinner = "It's a draw!";
        } else if (playerScore > computerScore) {
            overallWinner = "You are the overall winner!";
        } else {
            overallWinner = "Computer is the overall winner!";
        }

        // Display the final result in a popup screen
        displayPopup(`Game Over!\n${overallWinner}\n\nDo you want to play again?`);
    }

    // Function to display a popup screen with the given message
    function displayPopup(message) {
        // Set game over to true
        gameOver = true;

        // Create a modal element
        const popup = document.createElement("div");
        popup.className = "popup";

        // Create a popup content element
        const popupContent = document.createElement("div");
        popupContent.className = "popup-content";

        // Create a popup message element
        const popupMessage = document.createElement("p");
        popupMessage.textContent = message;

        // Append the message to the popup content
        popupContent.appendChild(popupMessage);

        // Create a reset button element
        const resetButton = document.createElement("button");
        resetButton.textContent = "Reset and Play Again";
        resetButton.addEventListener("click", function () {
            // Close the popup
            popup.style.display = "none";

            // Reset scores and rounds played for a new game
            document.getElementById("playerResult").textContent = "0";
            document.getElementById("computerResult").textContent = "0";
            document.getElementById("roundsPlayed").textContent = "0";

            // Reset player and computer choices
            document.getElementById("playerChoice").textContent = "";
            document.getElementById("computerChoice").textContent = "";

            // Reset round result
            document.getElementById("roundResult").textContent = "";

            // Set game over back to false
            gameOver = false;

            // Continue playing the game
            playComputerGame();
        });

        // Append the reset button to the popup content
        popupContent.appendChild(resetButton);

        // Append the popup content to the popup
        popup.appendChild(popupContent);

        // Append the popup to the document body
        document.body.appendChild(popup);

        // Display the popup
        popup.style.display = "block";
    }

    // Expose the playRound function to be accessible from the HTML onclick event
    window.playRound = playRound;
}

function goBack() {
    // Hide the game pages and show the home page
    showPage("home");
}
