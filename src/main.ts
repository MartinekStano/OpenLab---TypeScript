var player1:string;
var player2:string;
function RockPaperScissors(player1:string, player2:string)
{
    if(player1.toLowerCase() == player2.toLowerCase())
    {
        console.log("TIE");
    }else if(player1.toLowerCase() == "rock" && player2.toLowerCase() =="scissors" || player1.toLowerCase() == "scissors" && player2.toLowerCase() =="paper" || player1.toLowerCase() == "paper" && player2.toLowerCase() =="rock" )
    {
        console.log("Player 1 WIN!");
    }else{
        console.log("Player 2 WIN");
    }
    
}
RockPaperScissors(player1 = "rock", player2="scissors");
RockPaperScissors(player1 = "paper", player2 = "scissors");
RockPaperScissors(player1 = "paper", player2 = "paper");