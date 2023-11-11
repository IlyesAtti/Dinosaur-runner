document.onkeydown = detectKey;
let score = 0;
let obstaclesLeft = 100;
let stop = 0;
let fallTime = 1000;

function detectKey(e) {
    e = e || window.event;
    if (e.keyCode === 32) {
        dinosasur.style.top = 100 + "px";
        dinoFall();
    }
}

function increaseScore() {
    if (stop == 0) {
        ++score;
        document.getElementById("score").innerHTML = "Score: " + score;
        moveObstacle();
        console.log(fallTime);
        if (score % 200 == 0 && fallTime > 100) {
            speedUp();
        }
    }
}

function start() {
    document.getElementById("start").style= "visibility: hidden";
    document.getElementById("dinosasur").style = "visibility: visibil";
    document.getElementById("obstacles").style = "visibility: visibil";
    setInterval(increaseScore, 100);
}

function dinoFall() {
    setTimeout(() => {  dinosasur.style.top = 75 + "%"; }, fallTime);
}

function moveObstacle() {
    if (stop == 0) {
        obstacles.style.left = (obstaclesLeft) + "%";
        obstaclesLeft -= 1;
        if (obstaclesLeft < 0) {
            obstaclesLeft = 100;
        }
        if (obstaclesLeft < 9 && obstaclesLeft > 1) {
            if ( dinosasur.style.top == "75%") {
                stop = 1;
            }
        }
    }
}

function speedUp() {
    setInterval (moveObstacle, 100);
    fallTime -= 100;
}