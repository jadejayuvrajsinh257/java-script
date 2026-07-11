'use scripct';

// All the element are defined here.

const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const curren0EL = document.getElementById('current--0');
const curren1EL = document.getElementById('current--1');
const Rolldicebtn = document.querySelector('.btn--roll');
const newbtn = document.querySelector('.btn--new');
const holdbtn = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


let currentscore = 0;
let activeplayer = 0;
let score =[0,0];
let plying=true;

// function 

let switchplyer = function (){
 document.getElementById(`current--${activeplayer}`).textContent=0; 
        currentscore=0;
        activeplayer=activeplayer===0?1:0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
};

const Roll =function(){
    if(plying){
    // 1.genrating the random dice number.
    
    const dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);

    // 2.Displaying the number of dice.
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3.if dice number is not 1 then add them all and shiw at current score.
    if(dice !== 1)
    {
       currentscore+=dice;
       document.getElementById(`current--${activeplayer}`).textContent=currentscore; 
    }
    else{
    //  4.if dice has number 1.
       switchplyer();
    }
}
}

  const Hold =function(){
    if(plying){
     //  1. add current score to the active player score.
       score[activeplayer] += currentscore;
       document.getElementById(`score--${activeplayer}`).textContent=score[activeplayer]; 
     // 2. check the player current score is >= to 100.
       if(score[activeplayer]>=100)
       {
     // 3. finish the game.
     plying=false;
      diceEl.classList.add('hidden');
     document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
     document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
       }
    
       else{
    // 4.swich the player.
      switchplyer();
       }
    }
}

// starting condition.

score0EL.textContent=0;
score1EL.textContent=0;
diceEl.classList.add('hidden');
    
// Rolling dice functionlity.

Rolldicebtn.addEventListener('click',Roll);

holdbtn.addEventListener('click', Hold);

newbtn.addEventListener('click',function(){
    score0EL.textContent=0;
    score1EL.textContent=0;
    curren0EL.textContent=0; 
     curren1EL.textContent=0;
     player0El.classList.remove('player--winner');
     player1El.classList.remove('player--winner');
     player0El.classList.add('player--active');
     player1El.classList.remove('player--active');
     currentscore = 0;
     activeplayer = 0;
     score =[0,0];
     plying=true;
     Roll();
     Hold();

});