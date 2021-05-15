var score, rollScore, activeplayer, gamePlaying;

var score0 = document.querySelector('#score--0');
var score1 = document.querySelector('#score--1');
var dice = document.querySelector('.dice');

function newGame() {
    score0.textContent = '0';
    score1.textContent = '0';
    dice.style.display = 'none';
    score = [0, 0];
    rollScore = 0;
    activeplayer = 0;
    gamePlaying = true;
};
newGame();


function nextPlayer() {
    rollScore = 0;
    dice.style.display = 'none';
    document.querySelector('#current--' + activeplayer).textContent = 0;
    document.querySelector(".player--0").classList.toggle("player--active")
    document.querySelector(".player--1").classList.toggle("player--active")  
    activeplayer != 1 ? activeplayer = 1 : activeplayer = 0 ;
};


document.querySelector(".btn--roll").addEventListener('click', function() {
    if (gamePlaying) {
        var n = Math.floor((Math.random()*6) + 1);
        dice.style.display = 'block';
        if (n!=1) {
            dice.src = "dice-" + n + ".png";
            rollScore += n;
            document.querySelector("#current--" + activeplayer).textContent = rollScore;
        } else {
            nextPlayer();
        }
    }
});


document.querySelector(".btn--hold").addEventListener('click', function() {
    if (gamePlaying) {
        score[activeplayer] += rollScore;
        document.querySelector("#score--" + activeplayer).textContent = score[activeplayer];

        if (score[activeplayer] >= 50) {
            document.querySelector("#name--" + activeplayer).textContent = "Winner!!";
            dice.style.display = 'none';
            document.querySelector("#current--" + activeplayer).textContent = "0";
            gamePlaying = false;
        } else {
            nextPlayer();
        }   
    }
});


document.querySelector(".btn--new").addEventListener('click', function(){
    newGame();
    document.querySelector(".player--0").classList.remove("player--active");
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector(".player--0").classList.add("player--active")
});