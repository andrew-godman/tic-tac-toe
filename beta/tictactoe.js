var box = document.querySelector('.board');
var player1 = "";
var player2 = "";
var board = new Array(9).fill("");
var win = "";
var turn = "";
var submitButon = document.querySelector("#submit");

box.addEventListener('click', boxClicked);

submitButon.addEventListener('click', funtionSubmiterthing);

function funtionSubmiterthing() {
    event.preventDefault()
    player1 = document.getElementById("Player1").value;
    player2 = document.getElementById("Player2").value;
    turn = player1;
    document.querySelector(".Turn").innerText = player1 + "'s" + " turn"
}

function boxClicked() {

    columnClicked = event.target;
    columnClicked.style.backgroundColor = "white";
    columnClicked.textContent = turn;
    
    // document.querySelector(".Winner").innerHTML = "Player 1"
    var columnClickedNumber = (columnClicked.className.charAt(4)) -1
    board.splice(columnClickedNumber, 1, turn,);
    
    if  (turn === player1) {
            turn = player2
    }
    else {
            turn = player1
    }

    document.querySelector(".Turn").innerText = turn + "'s" + " turn"
    
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
            document.querySelector(".Turn").innerText = ""
            document.querySelector(".Winner").innerText = win + " Wins!"
            box.removeEventListener('click', boxClicked);

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
            document.querySelector(".Turn").innerText = ""
            document.querySelector(".Winner").innerText = win + " Wins!"
            box.removeEventListener('click', boxClicked);
        }
        

    }
