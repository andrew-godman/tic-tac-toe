var boardSelector = document.querySelector('.board');
var player1 = "";
var player2 = "";
var win = "";
var currnetTurn = "";
var board = new Array(9).fill("");
var submitButon = document.querySelector("#submit");

function submitUsers(event) {
    event.preventDefault()
    player1 = document.getElementById("Player1").value;
    player2 = document.getElementById("Player2").value;
    
    if (player1 === "" || player2 === "") {
        
        return
    }
    // submitButon.removeEventListener('click', submitUsers);
    updateCurrnetTurn()
}           

function checkWinnerResult(currnetTurn) {
    if (checkDraw === true) {
        document.querySelector(".Turn").innerText = "";
        document.querySelector(".Winner").innerText = "Draw!"
    }
    if( board[0] === currnetTurn && board[1] === currnetTurn && board[2] === currnetTurn ||
        board[3] === currnetTurn && board[4] === currnetTurn && board[5] === currnetTurn ||
        board[6] === currnetTurn && board[7] === currnetTurn && board[8] === currnetTurn ||
        board[0] === currnetTurn && board[3] === currnetTurn && board[6] === currnetTurn ||
        board[1] === currnetTurn && board[4] === currnetTurn && board[7] === currnetTurn ||
        board[2] === currnetTurn && board[5] === currnetTurn && board[8] === currnetTurn ||
        board[0] === currnetTurn && board[4] === currnetTurn && board[8] === currnetTurn ||
        board[2] === currnetTurn && board[4] === currnetTurn && board[6] === currnetTurn )
        {
            win = currnetTurn;
            document.querySelector(".Turn").innerText = "";
            document.querySelector(".Winner").innerText = win + " Wins!"
            // boardSelector.removeEventListener('click', cellClicked);
            // newGame()
        }
        
}

function checkDraw(array) {
    for(var i=0;i<array;i++){
        if (array[i] === "")
        return false
    }
    return true
}

function updateCurrnetTurn() {

    if (currnetTurn === "") {
        currnetTurn = player1
        document.querySelector(".Turn").innerText = currnetTurn + "'s" + " turn"
        return
    }

    if (currnetTurn === player1) {
        currnetTurn = player2
        document.querySelector(".Turn").innerText = currnetTurn + "'s" + " turn"
    }

    else {
        currnetTurn = player1
        document.querySelector(".Turn").innerText = currnetTurn + "'s" + " turn"
    }
}

function cellClicked(event) {
    var cellClickedEvent = event.target;
    var cellClickedNumber = (cellClickedEvent.className.charAt(8)) -1;
    var boardnumber = board[cellClickedNumber];

    if (cellClickedEvent.classList.contains("box")) {
        if (boardnumber === "") {            
                cellClickedEvent.style.backgroundColor = "white";
                cellClickedEvent.textContent = currnetTurn;
                
                board.splice(cellClickedNumber, 1, currnetTurn,);
                checkWinnerResult(currnetTurn)
                if (win === "") {
                    updateCurrnetTurn();
                }
        }
    }
}

// function newGame() {

//     var newMenuGameDiv = document.createElement("div");
//     newMenuGameDiv.classList.add("NewGame")
//     var newContent = document.createTextNode("Do you want to start a new Game");
//     newMenuGameDiv.appendChild(newContent)
//     var currentDiv = document.querySelector(".menu")
//     document.body.insertBefore(newMenuGameDiv, currentDiv);

//     var newMenuGameBtn = document.createElement("button")
//     var newMenuGameBtnText = document.createTextNode("Yes, start a new game")
//     var currentDiv = document.querySelector(".NewGame")
//     document.body.appendChild(newMenuGameBtn, currentDiv)


    
// }

// var newMenuGameDiv = document.createElement("button")
// var text = document.createTextNode("click me")

submitButon.addEventListener('click', submitUsers);
boardSelector.addEventListener('click', cellClicked)