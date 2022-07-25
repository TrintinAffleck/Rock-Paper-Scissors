function getAIChoice() {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";
    number = Math.floor(Math.random()*3);
    switch (number) {
        case 0:
            console.log(`Computer choice: ${rock}`)
            return rock
        case 1:
            console.log(`Computer choice: ${paper}`)
            return paper
        case 2:
            console.log(`Computer choice: ${scissors}`)
            return scissors
        default:
            console.log("Ai default choice this should never happen")
            break;
    }
}
let aiCount = 0;
let playerCount = 0;
function playRound(playerSelection, aiSelection = "")
{   
    while (true) {
    //Rock selected
    if (playerSelection.toLowerCase() === "rock")
    {   
        //Player Won Round
        if (aiSelection.toLowerCase() === "scissors")
        {
            playerCount++;
            break;
        }
        //Ai Won Round
        else if (aiSelection.toLowerCase() === "paper")
        {
            aiCount++;
            break;
        }
    }
    //Paper selected
    if (playerSelection.toLowerCase() === "paper")
    {
        //Player Won Round
        if (aiSelection.toLowerCase() === "rock")
        {
            playerCount++;
            break;
        }
        //Ai Won Round
        else if (aiSelection.toLowerCase() === "scissors")
        {
            aiCount++;
            break;
        }
    }
    //Scissors selected
    if (playerSelection.toLowerCase() === "scissors")
    {
        //Player Won Round
        if (aiSelection.toLowerCase() === "paper")
        {
            playerCount++;
            break;
        }
        //Ai Won Round
        else if (aiSelection.toLowerCase() === "rock")
        {
            aiCount++;
            break;
        }
    }
    else if (playerSelection === aiSelection)
    {
        aiSelection = getAIChoice();
    }
    }
}

function gameOn()
{
    for (let i = 0; i < 5; i++) 
    {
        let playerSelection = prompt("Player Selection: ","Rock, Paper, or Scissors");
        //If selection is null
        if (typeof(playerSelection === null))
        {
            console.log("1")
            while (true)
            {
                let playerSelection = prompt("Player Selection: ","Rock, Paper, or Scissors");
                if (typeof(playerSelection === String))
                {
                    console.log(typeof(playerSelection))
                    break;
                }
                else
                {   
                    console.log(typeof(playerSelection))
                    console.log("Please enter your choice!")
                }
            }
        }
        //Valid selection
        else if ((playerSelection.toLowerCase() === ("rock" || "paper" || "scissors"))
                    && (typeof(playerSelection) === String))
        {
            console.log("valid selection")
            break;
        }
        playRound(playerSelection,getAIChoice());
    }
}
gameOn()
