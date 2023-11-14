document.onkeydown = detectKey;
let score = 0;
let obstaclesLeft = 770;
let stop = 0;
let fallTime = 1000;    //1s
let obstacleSpeed = 10;

function start() {
    document.getElementById("start").style= "visibility: hidden";
    document.getElementById("dinosasur").style = "visibility: visibil";
    document.getElementById("obstacles").style = "visibility: visibil";
    setInterval(increaseScore, 100); //  -->  0,1 sec
    setInterval(moveObstacle, obstacleSpeed);
    dinoFall();
}

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
        if (score % 200 == 0 && fallTime > 100) { 
            speedUp();  // every 20 sec
        }
    }
}

function dinoFall() {
    setTimeout(() => {  dinosasur.style.top = 75 + "%"; }, fallTime);
}

function moveObstacle() {
    if (stop == 0) {
        obstacles.style.left = (obstaclesLeft) + "px";
        obstaclesLeft -= 1;
        if (obstaclesLeft < 0) {
            obstaclesLeft = 770;
        }
        if (obstaclesLeft < 67 && obstaclesLeft > 11) {
            if ( dinosasur.style.top == "75%") {
                stop = 1;
            }
        }
    }
}

function speedUp() {
    setInterval (moveObstacle, 10);
    fallTime -= 100;
}