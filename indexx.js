let boxes = document.querySelectorAll(".box");
let bluePlayer = document.querySelector(".playerBlue");
let redPlayer = document.querySelector(".playerRed");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () =>{
    turn0 = true;
    enableboxes();
    msgContainer.classList.add("hide");
}
if(turnO===true){
    bluePlayer.style.opacity = "1";
    redPlayer.style.opacity = "0.15";
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if(turnO===true){
            box.innerText = "O";
            turnO = false;
            box.style.backgroundColor = '#6DE1D2';
            bluePlayer.style.opacity = "0.15";
            redPlayer.style.opacity = "1";
        }else{
            box.innerText = "X";
            turnO = true;
            box.style.backgroundColor = '#F75A5A';
            bluePlayer.style.opacity = "1";
            redPlayer.style.opacity = "0.15";
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
        box.style.opacity='0.15';
    }
}

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.style.opacity = "1";
        box.style.backgroundColor = "#F8FAFC";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val && pos1val===pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
                boxes[pattern[0]].style.opacity=1;
                boxes[pattern[1]].style.opacity=1;
                boxes[pattern[2]].style.opacity=1;
                
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);