let gameSeq = [];
let userSeq = [];
let btns = ['yellow', 'red', 'purple', 'green'];
let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress", function(){

    if(started == false) {
        console.log('Game is started!');
        started = true;
        levelUp();
    }
})
function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function() {
        btn.classList.remove('flash');
    }, 250);

}
function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(function() {
        btn.classList.remove('userflash');
    }, 250);

}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // randam button choose!
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[ranIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}
function btnPress() {

    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute('id');

}
let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns) {
    btn.addEventListener('click', btnPress);
}












