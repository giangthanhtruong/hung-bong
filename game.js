
let cvs = document.getElementById('game');
let ctx = cvs.getContext('2d');
let basImg = new Image();
basImg.src = 'basket.png';
let leftArrow = false;
let rightArrow = false;
let balImg = new Image();
balImg.src = 'ball.png';
let speed = 4;
let point = 0;
let bg = new Image();
bg.src = 'background.jpg';

function drawBG() {
    ctx.drawImage(bg, 0, 0, 1200, 600)
}



let basket = {
    x: 100,
    y: 450
};


function drawBasket() {
    ctx.drawImage(basImg, basket.x, basket.y, 150, 150);
}



document.addEventListener('keydown', function (event) {
    if (event.keyCode === 37) {
        leftArrow = true;
    } else if (event.keyCode === 39) {
        rightArrow = true;
    }
})
document.addEventListener('keyup', function (event) {
    if (event.keyCode === 37) {
        leftArrow = false;
    } else if (event.keyCode === 39) {
        rightArrow = false;
    }
});



window.addEventListener('mousemove', function (event) {
    let key = document.getElementById('game').getBoundingClientRect()
    basket.x = event.clientX - key.left - 50 / 2;
    if(event.clientX>1050){
        basket.x=1050
    }
})


let myBall = [];
myBall[0] = Math.floor(Math.random() * 1150);
myBall[1] = 0

function drawEnemy() {
    ctx.drawImage(balImg, myBall[0], myBall[1], 50, 50);
    myBall[1] += speed;
}

drawEnemy()

function check() {
    if (myBall[0] >= basket.x &&
        myBall[0] + 50 <= basket.x + 150 &&
        myBall[1] >= basket.y &&
        myBall[1] + 50 < basket.y + 150) {
        myBall[0] = Math.floor(Math.random() * 1150);
        myBall[1] = 0
        point++
    }
}


function Point(point) {
    ctx.font = '20px Arial';
    ctx.fillText('Point : '+point, cvs.width - 100, 30)
    switch (point) {
        case 10:
            speed = 7 ;
            console.log(speed)
            break;
        case 20:
            speed = 10;
            break;
        case 30:
            speed = 13;
            break;
        case 40:
            speed = 17;
            break;
        case 50:
            speed = 20;
            break;
        case 60:
            speed = 25;
            break;
        case 70:
            speed = 30;
            break;
        case 80:
            speed = 35;
            break;
        case 90:
            speed = 40;
            break;
    }
}


// function winner() {
//     if (speed > 0 && point < 50) {
//         ctx.font = '50px Arial';
//         ctx.fillText('Your Score is : '+ point, cvs.width/4, cvs.height/2)
//     }
//     else if (point === 50) {
//         speed = 0
//         ctx.font = '40px Arial';
//         ctx.fillText('You are the Winner', 0, cvs.height/2)
//     }
// }


function loop() {
    if (basket.y-50 < 600) {
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        drawBG();
        drawBasket()
        drawEnemy()
        // winner();
        check();
        Point(point)
    }
    window.requestAnimationFrame(loop);
}

loop();
