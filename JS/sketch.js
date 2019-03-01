function preload() {
    loadMultipleImgs();
}

function setup() {
    createCanvas(800, 450);

    Background['sky'] = new Sky(width / 2, height / 2 + 25);
    Background['ground'] = new Ground(width / 2, height - 50);

    new Player(10, 200, 50, 100);
    new Obstacle(400, 250, 150, 70);
}

function draw() {
    if (!gameProperties.gameOver) {
        background(0);
        drawSprites();


    }
}

// function mousePressed() {
//     p.sprite.velocity.y = -10;
// }

// if (p.sprite.collide(o.sprite)) {
//     print('T');
//     updateSprites(false);
//     gameOver = true;
// }