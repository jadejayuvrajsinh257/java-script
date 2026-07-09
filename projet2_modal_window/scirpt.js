'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosewindow = document.querySelector('.close-modal');
const btnsopenWindow = document.querySelectorAll('.show-modal');

const openbtn = function (){
           modal.classList.remove('hidden');
           overlay.classList.remove('hidden');
    }
const closedbtn = function (){
        modal.classList.add('hidden');
           overlay.classList.add('hidden'); 
}

for(let i=0 ; i<btnsopenWindow.length ; i++)
{
    btnsopenWindow[i].addEventListener('click',openbtn);
}

btnclosewindow.addEventListener('click', closedbtn);
overlay.addEventListener('click',closedbtn);

document.addEventListener('keydown',function(e)
{
    if (e.key === 'escape' && !modal.classList.contains('hidden'));
    closedbtn();
    
});