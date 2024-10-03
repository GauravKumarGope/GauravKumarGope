
/* Logic- the main logic is we make an array and save all the possible winning pattern in it
          if pattern is matched the x or 0 ; the symbol used for making it ; it's player is the winner*/

let boxes = document.querySelectorAll(".box")                                  // assessing boxes
let resetBtn= document.querySelector("#reset-btn")                             //assessing buttons
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")                     //assessing msg div 
let msg= document.querySelector("#msg")                                        //assesing msg

let turnO= true;                          //track player playing
let count=0;                                                                // to track drawn

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO=true 
    count=0
    enableBoxes()
    msgContainer.classList.add('hide')
}

boxes.forEach ((box) => {
    box.addEventListener("click",() => {
        if(turnO){                                //player O turn
            box.innerText='O'
            turnO= false
        }
        else{
            box.innerText='X'                    // player X turn
            turnO= true
        }
        box.disabled=true                       //box need to be disabled otherwise if clicked again it may change the value
        count++

        let isWinner=checkWinner()

        if (count===9 && !isWinner){
            gameDraw()
        }
    })
})

const checkWinner = () => {                                 //fUNCTION TO CHECK WINNER
    for(let pattern of winPatterns) {
        let pos1Val=boxes[pattern[0]].innerText               //taking values using innertext
        let pos2Val=boxes[pattern[1]].innerText
        let pos3Val=boxes[pattern[2]].innerText

        if(pos1Val !="" && pos2Val !="" && pos3Val != ""){    //checking if any pos is empty or not, if empty no need to check for winner
            if (pos1Val === pos2Val && pos2Val === pos3Val){  //checking if all pos has same syb , if yes that sym is winner
                console.log("hello")
                showWinner(pos1Val)                           //calling function to show winner
                return true
            }
        }
    }
}

const showWinner = (winner) => {                                              // function to show winner
    console.log(`winner is ${winner}`)
    msg.innerText =`Congratulations , winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const gameDraw=()=>{
    msg.innerText='Game was Drawn'
    msg.container.classList.remove("hide");
    disableBoxes();
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false
        box.innerText=' '
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);