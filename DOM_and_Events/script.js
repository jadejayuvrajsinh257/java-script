'use strict';

let SecretNumber = Math.trunc(Math.random()*20) +1 ;
let score =20;
let highScore = 0;

let displayMessage = function (message)
{
   document.querySelector('.message').textContent = message;   
};


document.querySelector('.check').addEventListener('click',function ()

{
 const guess =Number( document.querySelector('.guess').value);
 console.log(guess, typeof guess);

//  if input is not given :

 if(!guess)
 {
   //  document.querySelector('.message').textContent ="❌NO Number!";
   displayMessage("❌NO Number!");
 }

//  if input is right :

 else if( guess === SecretNumber){
      //  document.querySelector('.message').textContent = "🎉 Correct Number";
      displayMessage("🎉 Correct Number");

       const sn = document.querySelector('.number').textContent = SecretNumber;
       console.log(sn);

       document.querySelector('body').style.backgroundColor ='#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score>highScore)
        {
         highScore=score;
         document.querySelector('.highscore').textContent = highScore;
        }
 }

//  if input is wrong :

else if (guess !== SecretNumber){
   if(score > 1)
       {
         //  document.querySelector('.message').textContent =guess>SecretNumber ? "📈 Too High" : "📉 Too low";
         displayMessage(guess>SecretNumber ? "📈 Too High" : "📉 Too low");
          score --;
          document.querySelector('.score').textContent = score ;
       }
       else{
       
         //  document.querySelector('.message').textContent = "💥 You lost the Game!";
         displayMessage("💥 You lost the Game!");
          document.querySelector('.score').textContent = 0;
       }
}
//  else if(guess > SecretNumber){
//        if(score > 1)
//        {
//           document.querySelector('.message').textContent = "📈 Too High";
//           score --;
//           document.querySelector('.score').textContent = score ;
//        }
//        else{
       
//           document.querySelector('.message').textContent = "💥 You lost the Game!"; 
//           document.querySelector('.score').textContent = 0;
//        }
//  }

//  else if(guess < SecretNumber){
//        if(score > 1)
//        {
//           document.querySelector('.message').textContent = "📉 Too low";
//           score --;
//           document.querySelector('.score').textContent = score ;
//        }
//        else{
       
//           document.querySelector('.message').textContent = "💥 You lost the Game!"; 
//           document.querySelector('.score').textContent = 0;
//        }
//  }

});

document.querySelector('.again').addEventListener('click',function (){
   score = 20;
   SecretNumber = Math.trunc(Math.random()*20) +1 ;
   //  document.querySelector('.message').textContent = "start guessing ...";
   displayMessage("start guessing ...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value =' '; 
    document.querySelector('body').style.backgroundColor ='#222';
        document.querySelector('.number').style.width = '15rem';
       document.querySelector('.number').textContent = '?';

});
