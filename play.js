let userchoice = 0;

// accessing
let choices = document.querySelectorAll(".choice");
let user = document.querySelector(".user");
let comp = document.querySelector(".comp");
let para = document.querySelector(".note");
let navscore = document.querySelector(".score");
let targetscore = document.querySelector(".target");

// Generate Computer Choice

let gencompchoice = () => {
    const array = [1,2,3,4,5,6,10];
    let randidx = Math.floor(Math.random() *7);
    return array[randidx];
}


// Looking for User Choice
choices.forEach((val) => {
    val.addEventListener("click", () => {
        
        let click = val.getAttribute("id");

        // let userchoice = 0;

        if( click==='one') {
            userchoice = 1;
        }
        else if( click === 'two') {
            userchoice = 2;
        }
        else if( click === 'three') {
            userchoice = 3;
        }
        else if( click === 'four') {
            userchoice = 4;
        }
        else if( click === 'five') {
            userchoice = 5;
        }
        else if( click === 'six') {
            userchoice = 6;
        }
        else{
            userchoice = 10;
        }
        
        let compchoice = gencompchoice();
        
        user.innerText = userchoice;
        comp.innerText = compchoice;
        
        gameplay(userchoice,compchoice)
        
    })
})

let userscore = 0;
let compscore = 0;
let userturn = true;



let gameplay = (userchoice,compchoice) => {
    if( userturn){
        if( userchoice == compchoice) {
            userturn = false;
            targetscore.innerText = userscore;
        }
        else{
        userscore = userscore + userchoice;
        console.log("userscore =",userscore);
        navscore.innerText = userscore;
        }

    }
    else{
        compscore = compscore + compchoice;
        console.log("computer score =",compscore);
        navscore.innerText = compscore;

        if( compscore > userscore){
            alert("Computer is the winner");
        }
        else if(compchoice == userchoice){
            compscore = compscore + compchoice;
        console.log("computer score =",compscore);
        navscore.innerText = compscore
            alert("You are the winner");

        }
        
        }
    }
    






