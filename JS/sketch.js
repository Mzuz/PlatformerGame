function preload() {
    loadMultipleImgs();
}

let obstacles = [];
let player;

function setup() {
    createCanvas(800, 450);

    obstacles = new Group();
    solids = new Group();
    boxes = new Group();

    Background['sky'] = new Sky(width / 2, height / 2 + 25);
    Background['ground'] = new Ground(width / 2, height - 50, 800, 150);

    player = new Player(100, 300, 3, 3);
    obstacles.push(new Box(400, 250, 50, 50));
}

function draw() {
    if (!gameProperties.gameOver) {
        background(0);

        player.update();
        steering();

        for (let o of obstacles) {
            o.update();
        }

        drawSprites();
    }
}

function steering() {
    if (keyWentDown(RIGHT_ARROW)) {
        player.dir.x = 0;
        player.speed = 2;
    } else if (keyWentDown(LEFT_ARROW)) {
        player.dir.x = 0;
        player.speed = 2;
    }

    // if (keyWentDown(UP_ARROW)) player.sprite.velocity.y = -2;

    if (keyWentUp(RIGHT_ARROW) || keyWentUp(LEFT_ARROW)) player.speed = 0;
}