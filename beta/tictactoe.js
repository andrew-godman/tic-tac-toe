var box = document.querySelector('.board')

box.addEventListener('click', boxClicked)

var board = new Array(9).fill("")
var win = "";
function boxClicked() {

    columnClicked = event.target;
    columnClicked.style.backgroundColor = "white";
    player1 = "andrew"
    player2 = "CPU"

    var columnClickedNumber = (columnClicked.className.charAt(4)) -1
    board.splice(columnClickedNumber, 1, player1,);
    
    if( board[0] === player1 && board[1] === player1 && board[2] === player1 ||
        board[3] === player1 && board[4] === player1 && board[5] === player1 ||
        board[6] === player1 && board[7] === player1 && board[8] === player1 ||
        board[0] === player1 && board[3] === player1 && board[6] === player1 ||
        board[1] === player1 && board[4] === player1 && board[7] === player1 ||
        board[2] === player1 && board[5] === player1 && board[8] === player1 ||
        board[0] === player1 && board[4] === player1 && board[8] === player1 ||
        board[2] === player1 && board[4] === player1 && board[6] === player1 )
        {
            var win = player1;
            console.log("you win");
        }
    
    if( board[0] === player2 && board[1] === player2 && board[2] === player2 ||
        board[3] === player2 && board[4] === player2 && board[5] === player2 ||
        board[6] === player2 && board[7] === player2 && board[8] === player2 ||
        board[0] === player2 && board[3] === player2 && board[6] === player2 ||
        board[1] === player2 && board[4] === player2 && board[7] === player2 ||
        board[2] === player2 && board[5] === player2 && board[8] === player2 ||
        board[0] === player2 && board[4] === player2 && board[8] === player2 ||
        board[2] === player2 && board[4] === player2 && board[6] === player2 )
        {
            var win = player2;
            console.log("you win");
        }

    }

// if(board[0] === player1 && board[1] === player1 && board[2] === player1) {
//     var win = player1;
//     console.log("you win");
// }
// if(board[3] === player1 && board[4] === player1 && board[5] === player1) {
//     var win = player1;
//     console.log("you win");
// }
// if(board[6] === player1 && board[7] === player1 && board[8] === player1) {
//     var win = player1;
//     console.log("you win");
// }
// if(board[0] === player1 && board[3] === player1 && board[6] === player1) {
//     var win = player1;
//     console.log("you win");
// }
// if(board[1] === player1 && board[4] === player1 && board[7] === player1) {
//     var win = player1;
//     console.log("you win");
// }
// if(board[2] === player1 && board[5] === player1 && board[8] === player1) {
//     var win = player1;
//     console.log("you win");
// }
// if(board[0] === player1 && board[4] === player1 && board[8] === player1) {
//     var win = player1;
//     console.log("you win");
// }
// if(board[2] === player1 && board[4] === player1 && board[6] === player1) {
//     var win = player1;
//     console.log("you win");
 