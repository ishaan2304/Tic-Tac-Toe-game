let boxes =document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newgameBtn=document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container");
let msg =document.querySelector("#msg");
let turnO=true; //players
const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetgame =() =>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    }) ;
});
const disableBoxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner = (winner) => {
    msg.innerText=`Congratulations ,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkwinner = () => {
    for( let pattern of win)
        {
            let pos1= boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;
            if(pos1 !="" && pos2!="" && pos3!="") {
                if(pos1==pos2 && pos2==pos3){
                    console.log("winner",pos1);
                    showWinner(pos1);
                }
            }

        }
};
newgameBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
