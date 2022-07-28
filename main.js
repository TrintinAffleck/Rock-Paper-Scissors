function getAIChoice() {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    number = Math.floor(Math.random()*3);
    switch (number) {
        case 0:
            console.log(`Computer choice: ${rock}`);
            return rock;
        case 1:
            console.log(`Computer choice: ${paper}`);
            return paper;
        case 2:
            console.log(`Computer choice: ${scissors}`);
            return scissors;
        default:
            console.log("Ai default choice this should never happen");
            break;
        }
    }
    
    let aiCount = 0;
    let playerCount = 0;
    
    function playRound(playerSelection, aiSelection)
    {   
        //If selections are the same redo aiSelection
        if (playerSelection.toLowerCase() === aiSelection)
        {
            console.log("Its a tie pick again!")
            return
        }
        while (true) {
        //Rock selected
        if (playerSelection.toLowerCase() === "rock")
        {   
            //Player Won Round
            if (aiSelection.toLowerCase() === "scissors")
            {
                playerCount++;
                console.log("Player wins this round!");
                break;
            }
            //Ai Won Round
            else if (aiSelection.toLowerCase() === "paper")
            {
                aiCount++;
                console.log("Computer wins this round!");
                break;
            }
        }
        //Paper selected
        else if (playerSelection.toLowerCase() === "paper")
        {
            //Player Won Round
            if (aiSelection.toLowerCase() === "rock")
            {
                playerCount++;
                console.log("Player wins this round!");
                break;
            }
            //Ai Won Round
            else if (aiSelection.toLowerCase() === "scissors")
            {
                aiCount++;
                console.log("Computer wins this round!");
                break;
            }
        }
        //Scissors selected
        else (playerSelection.toLowerCase() === "scissors")
        {
            //Player Won Round
            if (aiSelection.toLowerCase() === "paper")
            {
                playerCount++;
                console.log("Player wins this round!");
                break;
            }
            //Ai Won Round
            else if (aiSelection.toLowerCase() === "rock")
            {
                aiCount++;
                console.log("Computer wins this round!");
                break;
            }
        }
    }
}

function gameOn()
{
    for (let i = 0; i < 5; i++) {
        
        while (true) 
        {
            //Ask for input
            let playerSelection = prompt("Player Selection: ","Rock, Paper, or Scissors");
            //Null input
            if (playerSelection === null) 
            {
                console.log("Invalid selection please try again!");
            }
            //Valid Input
            else if (playerSelection.toLowerCase() === "rock"||
            playerSelection.toLowerCase() === "paper" ||
            playerSelection.toLowerCase() === "scissors")
            {
                playRound(playerSelection,getAIChoice());
                console.log(`Player won ${playerCount} rounds.`)
                console.log(`Computer won ${aiCount} rounds.`)
                if (aiCount === 3)
                {
                    console.log("Computer wins the game!");
                    return
                }
                else if (playerCount === 3)
                {
                    console.log("Player wins the game!");
                    return
                }
            }
            else
            {
                console.log("Invalid selection please try again!");
            }
        }
    }
}
gameOn()
