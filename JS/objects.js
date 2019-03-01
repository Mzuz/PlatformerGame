class Player {
    constructor(x, y, wPercent, hPercent) {
        this.x = x;
        this.y = y;
        this.wPercent = wPercent;
        this.hPercent = hPercent;

        this.sprite = createSprite();

        this.sprite.position.x = x;
        this.sprite.position.y = y;

        // this.sprite.velocity.x = 0;
        // this.sprite.velocity.y = 0;

        this.dir = 0;
        this.speed = 0;
        this.sprite.addSpeed(this.speed, this.dir)
        this.sprite.rotateToDirection = false;

        imgs.player.resize(imgs.player.width / wPercent, imgs.player.height / hPercent);
        this.sprite.addImage(imgs.player);

        this.sprite.setCollider('rectangle');
    }

    update() {
        this.sprite.collide(solids);
        // this.sprite.displace(boxes);
        this.sprite.velocity.y += gameProperties.gravity;

        this.sprite.addSpeed(this.speed, this.dir)
        this.sprite.limitSpeed(3);
    }
}

class Obstacle {
    constructor(x, y, w, h) {
        this.sprite = createSprite(x, y, w, h);
        this.sprite.setCollider('rectangle', 0, 0, w, h);

        this.sprite.position.x = x;
        this.sprite.position.y = y;

        this.sprite.addToGroup(obstacles);
    }
}

class Box extends Obstacle {
    constructor(x, y, w, h) {
        super(x, y, w, h);
        imgs.box.resize(w, h);
        this.sprite.addImage(imgs.box);
        this.sprite.addToGroup(solids);
        // this.sprite.addToGroup(boxes);
    }

    update() {
        if (!this.sprite.collide(Background.ground.sprite)) {
            this.sprite.velocity.y += gameProperties.gravity;
        }
    }
}

class Ground extends Obstacle {
    constructor(x, y, w, h) {
        super(x, y, w, h)
        this.sprite.addImage(imgs.ground);
        this.sprite.addToGroup(solids);
    }
}

class Sky {
    constructor(x, y) {
        this.sprite = createSprite(x, y);
        this.sprite.addImage(imgs.sky);
    }
}