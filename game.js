

//Các biến Const
const cvs = document.getElementById('game');
const ctx = cvs.getContext('2d');
const basImg = new Image();
basImg.src = 'basket.png';
let leftArrow = false;
let rightArrow = false;
let balImg = new Image();
balImg.src = 'ball.png';
let speed = 4;
let point = 0;
let bg=new Image();
bg.src = 'background.jpg';

function drawBG() {
    ctx.drawImage(bg,0,0,1200,600)
}


//Creat basket
let basket = {
    x : 600,
    y : 450
};

//Draw Basket
function drawBasket() {
    ctx.drawImage(basImg,basket.x,basket.y,150,150);
}


//Control Car
document.addEventListener('keydown', function (event) {
    if(event.keyCode === 37) {
        leftArrow = true;
    } else if (event.keyCode === 39) {
        rightArrow = true;
    }
})
document.addEventListener('keyup', function (event) {
    if(event.keyCode === 37) {
        leftArrow = false;
    } else if (event.keyCode === 39) {
        rightArrow = false;
    }
});


//Move Basket
function moveBasket() {
    if (leftArrow && basket.x > 0 ) {
        basket.x -= 5;
    }
    if (rightArrow && basket.x < cvs.width - 100) {
        basket.x += 5;
    }
}

//Make Enemy
let myBall = [];
myBall[0] = {
    x : cvs.width,
    y : 0,
};
function drawEnemy() {
    for (let i = 0; i < myBall.length; i++) {
        ctx.drawImage(balImg, myBall[i].x, myBall[i].y, 50, 50);
        myBall[i].y += speed;
    }
}
drawEnemy()
//         if (myBall[i].x >= basket.x && myBall[i].x <= (basket.x + basket.width) - myBall.width
//                 && myBall.y === basket.y) {
//                 myBall.push({
//                     x : Math.abs((Math.random()*cvs.width - 100)),
//                     y : 0
//             });
//             if (basket.y > myBall[i].y - 50 && basket.y < myBall[i].y + 140 && basket.x > myBall[i].x - 51) {
//                 speed = 0;
//             }
//         }
//     } point = myBall.length -1;
// }
//  function Point() {
//     ctx.font = '20px Arial';
//     ctx.fillText('Point : '+point, cvs.width - 100, 30)
//     switch (point) {
//         case 10:
//             speed = 7 ;
//             console.log(speed)
//             break;
//         case 20:
//             speed = 10;
//             break;
//         case 30:
//             speed = 13;
//             break;
//         case 40:
//             speed = 17;
//             break;
//         case 50:
//             speed = 20;
//             break;
//         case 60:
//             speed = 25;
//             break;
//         case 70:
//             speed = 30;
//             break;
//         case 80:
//             speed = 35;
//             break;
//         case 90:
//             speed = 40;
//             break;
//     }
// }
//
// //Update Game
// function update() {
//     moveBasket();
//     Point();
//
// }
//
// function winner() {
//     if (speed === 0 && point < 50) {
//         ctx.font = '50px Arial';
//         ctx.fillText('Your Score is : '+ point, cvs.width/4, cvs.height/2)
//     }
//     else if (point === 50) {
//         speed = 0
//         ctx.font = '40px Arial';
//         ctx.fillText('You are the Winner', 0, cvs.height/2)
//     }
// }
//
//
// //Game loop
// function loop() {
//     ctx.clearRect(0,0,cvs.width,cvs.height);
//     drawBG();
//     drawBasket();
//     update();
//     drawEnemy();
//     winner();
//     requestAnimationFrame(loop);
// }
// loop();