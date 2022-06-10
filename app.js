// * POINTS;

const playerPoint = document.querySelector('.playerPoints');
const computerPoint = document.querySelector('.computerPoints');

// * IMAGES;
const playerImg = document.querySelector('.player');
const computerImg = document.querySelector('.computer');

// * BUTTONS;
const buttons = document.querySelector(".options");

// * RESET BUTTON;

const reset = document.querySelector(".reset");

// * SOUNDS;

const scissors = document.getElementById('scissors');
const stone = document.getElementById('stone');
const paper = document.getElementById('paper');

// * DRAW

const draw = document.querySelector('.draw');

reset.addEventListener("click" , () => {
    window.location.reload();
    scissors.play()

})

buttons.addEventListener("click"  , (e) => {
    
   



    Audio.currentTime = 0;

    
        computerImg.classList.add("shakeComputer")
    playerImg.classList.add("shakePlayer")

    
    
    if(e.target.classList.contains("stone")){
        stone.play()
      
       
    playerImg.innerHTML = `<img src="./img/stonePlayer.png" alt="">`;
   
      
        
    }
    else if(e.target.classList.contains("paper")){
        playerImg.innerHTML = `<img src="./img/paperPlayer.png" alt="">`;
        // console.log("paper");
        paper.play()
       
        
        
        
        

    }

    else if (e.target.classList.contains("scissors")){
        playerImg.innerHTML = `<img src="./img/scissorsPlayer.png" alt="">`;
        scissors.play()
        
        
        
        
    }
    let array = ["stone", "paper", "scissors"];
    let random = Math.floor(Math.random() * 3);
    let computerChoice = array[random];
    // console.log(computerChoice);

    computerImg.innerHTML = `<img src="./img/${computerChoice}Computer.png" alt="">`;

    if(computerChoice === "stone" && e.target.classList.contains("paper")){
        playerPoint.innerHTML ++;
        draw.innerHTML =""
    }
    if(computerChoice === "paper" && e.target.classList.contains("scissors")){
            playerPoint.innerHTML ++  
            draw.innerHTML =""
    }
    if(computerChoice === "scissors" && e.target.classList.contains("stone")){
        playerPoint.innerHTML ++
        draw.innerHTML = ""
       
    }
    if(computerChoice === "stone" && e.target.classList.contains("scissors")){
        computerPoint.innerHTML ++
        draw.innerHTML = ""
        
    }
    if(computerChoice === "paper" && e.target.classList.contains("stone")){
        computerPoint.innerHTML ++
        draw.innerHTML = ""
        
    }
    if(computerChoice === "scissors" && e.target.classList.contains("paper")){
        computerPoint.innerHTML ++
        draw.innerHTML = ""
        
    }
    if(playerPoint.innerHTML === "10"){
        alert("Player wins")
        window.location.reload();
    }
    if(computerPoint.innerHTML === "10"){
        alert("Computer wins")
        window.location.reload(); 
    }

    if(computerChoice === "stone" && e.target.classList.contains("stone")){
        draw.innerHTML = "Draw ! Try again"
       
    }
    else if(computerChoice === "paper" && e.target.classList.contains("paper")){
        draw.innerHTML = "Draw ! Try again"
        
    }
    else if(computerChoice === "scissors" && e.target.classList.contains("scissors")){
        draw.innerHTML = "Draw ! Try again"
       
    }
   

})

