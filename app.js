let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    //rock pap sci
   const randIdx= Math.floor(Math.random()* 3);
   return options[randIdx];


}
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText= "Game was draw. Play Again🤙";
    msg.style.backgroundColor="#081b31";

}

const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText= `You win🥳 Your ${userChoice} beats ${compChoice} ✨`;
        msg.style.backgroundColor="green";
    }else
    {    
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose:(");
        msg.innerText= `You lost🙁 ${userChoice} beats your ${compChoice}👎 `;
        msg.style.backgroundColor="red";
    }

}


const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    //generate computer choice
      const compChoice= genCompChoice();
      console.log("computer choice=", compChoice);

      if (userChoice==compChoice){
        //draw
         drawGame();
      }
      else{
        let userWin=true;
        if (userChoice=="rock"){
            //sci,paper
           userWin= compChoice=="paper"? false:true;
        } else if(userChoice=="paper")
        {
          //  rock, sci
          userWin=compChoice=="scissors"?false: true;
        }
        else{
            // rock, paper
            userWin=compChoice=="rock"?false: true;

        }
        showWinner(userWin,userChoice,compChoice);
      }

};

choices.forEach((choice) =>{
     choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);

     });

});