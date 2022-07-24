function getAIChoice() {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";
    number = Math.floor(Math.random()*3);
    console.log(number)
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
getAIChoice()