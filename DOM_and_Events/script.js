'use strict';

const SecretNumber = Math.trunc(Math.random()*20) +1 ;
let score =20;

document.querySelector('.check').addEventListener('click',function (){
 const guess =Number( document.querySelector('.guess').value);
 console.log(guess, typeof guess);

 if(!guess)
 {
    document.querySelector('.message').textContent ="❌NO Number!";
 }
 else if( guess === SecretNumber){
       document.querySelector('.message').textContent = "🎉 Correct Number";

       const sn = document.querySelector('.number').textContent = SecretNumber;
       console.log(sn);

       document.querySelector('body').style.backgroundColor ='#60b347';
        document.querySelector('.number').style.width = '30rem';
 }
 else if(guess > SecretNumber){
       if(score > 1)
       {
          document.querySelector('.message').textContent = "📈 Too High";
          score --;
          document.querySelector('.score').textContent = score ;
       }
       else{
       
          document.querySelector('.message').textContent = "💥 You lost the Game!"; 
          document.querySelector('.score').textContent = 0;
       }
 }

 else if(guess < SecretNumber){
       if(score > 1)
       {
          document.querySelector('.message').textContent = "📉 Too low";
          score --;
          document.querySelector('.score').textContent = score ;
       }
       else{
       
          document.querySelector('.message').textContent = "💥 You lost the Game!"; 
          document.querySelector('.score').textContent = 0;
       }
 }

});

document.querySelector('.again').addEventListener('click',function (){
    document.querySelector('.message').textContent = "start guessing ...";
    document.querySelector('body').style.backgroundColor ='#222';
        document.querySelector('.number').style.width = '15rem';
      const sn = document.querySelector('.number').textContent = '?';
     document.querySelector('.score').textContent = '20' ;
     


});
