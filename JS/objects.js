class Player {
    constructor(x, y, w, h) {
        this.sprite = createSprite();

        this.sprite.position.x = x;
        this.sprite.position.y = y;

        this.sprite.velocity.x = 4;
        this.sprite.velocity.y = 0;

        this.sprite.addImage(imgs.player);

        this.sprite.setCollider('rectangle', 0, 0, w, h);

        this.sprite.rotateToDirection = true;
    }
}

class Obstacle {
    constructor(x, y, w, h) {
        this.sprite = createSprite(x, y, w, h);
        this.sprite.setCollider('rectangle', 0, 0, w, h);

        this.sprite.position.x = x;
        this.sprite.position.y = y;

        this.sprite.addToGroup('obstacles');
    }
}

class Box extends Obstacle {
    constructor(x, y, w, h) {
        super(x, y, w, h);
    }
}

class Ground {
    constructor(x, y) {
        this.sprite = createSprite(x, y);
        this.sprite.addImage(imgs.ground);
    }
}

class Sky {
    constructor(x, y) {
        this.sprite = createSprite(x, y);
        this.sprite.addImage(imgs.sky);
    }
}