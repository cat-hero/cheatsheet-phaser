export class ColorBurst {
    constructor(config) {
        this.scene = config.scene;
        this.x = 0;
        this.y = 0;
        if (config.x) {
            this.x = config.x;
        }
        if (config.y) {
            this.y = config.y;
        }
        this.size = 5;
        if (config.size) {
            this.size = config.size;
        }
        this.dist = 150;
        if (config.dist) {
            this.dist = config.dist;
        }
        this.duration = 1000;
        if (config.duration) {
            this.duration = config.duration;
        }
        this.maxDist = 300;
        if (config.maxDist) {
            this.maxDist = config.maxDist;
        }
        //
        //
        //
        this.color = 0xffffff;
        if (config.color) {
            this.color = config.color;
        }
        this.n = 25;
        if (config.count) {
            this.n = config.count;
        }
        for (var i = 0; i < this.n; i++) {
            var star = this.scene.add.sprite(this.x, this.y, "effectColorStars");
            //
            //
            //
            var f = Phaser.Math.Between(0, 14);
            star.setFrame(f);
            star.setOrigin(0.5, 0.5);
            var r = Phaser.Math.Between(50, this.maxDist);
            var s = Phaser.Math.Between(1, 100) / 100;
            star.scaleX = s;
            star.scaleY = s;
            var angle = i * (360 / this.n);
            var tx = this.x + r * Math.cos(angle);
            var ty = this.y + r * Math.sin(angle);
            //  star.x=tx;
            // star.y=ty;
            this.scene.tweens.add({
                targets: star,
                duration: this.duration,
                alpha: 0,
                y: ty,
                x: tx,
                onComplete: this.tweenDone,
                onCompleteParams: [{
                    scope: this
                }]
            });
        }
    }
    tweenDone(tween, targets, custom) {
        targets[0].destroy();
    }
    static preload(scene,path) {
        scene.load.spritesheet('effectColorStars', path, {
            frameWidth: 26,
            frameHeight: 26
        });
    }
}