var dice = 0,
    roundScore = 0,
    activePlayer = 0,
    scores = [0,0],
    playingGame = true; // state variable


var $rollBtn, $diceImg, $current, $holdBtn, $newBtn;

$rollBtn = document.querySelector('.btn-roll');
$holdBtn = document.querySelector('.btn-hold');
$diceImg = document.querySelector('.dice-img');
$newBtn = document.querySelector('.btn-new');

init();

$rollBtn.addEventListener('click', function() {
    if(playingGame) {
        dice = Math.floor(Math.random() * 6) + 1;
        $current = document.querySelector('#current-' + activePlayer);
        dice !== 1 ? (
            $diceImg.setAttribute('src', 'images/dice-' + dice + '.png'),
            $diceImg.style.display = 'block',
            roundScore += dice,
            $current.textContent = roundScore
        ) : nextPlayer();
    }
});

$holdBtn.addEventListener('click', function() {
    if(playingGame) {
        // update player score
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
        if(scores[activePlayer] >= 100) {
            document.getElementById('name-' + activePlayer).textContent = 'Winner!';
            playingGame = false;
        } else {
            nextPlayer();
        }
    }
});

$newBtn.addEventListener('click', function() {
    init();
});


function nextPlayer() {
    // set current score to 0
    roundScore = 0;
    $current.textContent = roundScore;

    // hide image
    $diceImg.style.display = 'none';
    
    // change active player
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove("active"),
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0,
    document.querySelector('.player-' + activePlayer + '-panel').classList.add("active")
}


function init() {
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'player1';
    document.getElementById('name-1').textContent = 'player2';    

    $diceImg.style.display = 'none';

    dice = 0;
    roundScore = 0;
    activePlayer = 0;
    scores = [0,0];
    playingGame = true;
}


