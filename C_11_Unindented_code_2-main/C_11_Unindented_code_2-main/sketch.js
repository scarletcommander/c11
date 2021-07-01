    var trex, trex_running, trex_collided;
    var ground, invisibleGround, groundImage;

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
}

function setup() {

    createCanvas(600, 200);
    //create a trex sprite

    trex = createSprite(50,168,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    //create a ground sprite

    ground = createSprite(200,186,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    invisibleGround = createSprite(190,190,396,16);
    invisibleGround.visible = false

}


    function draw() {
    background(220);
    //jump when the space button is pressed

    if (keyWentDown("space") && trex.y > 100.5) {
    trex.velocityY = -10;

    }

    trex.velocityY = trex.velocityY + 0.8
    if (ground.x < 0) {
    ground.x = ground.width / 2;
    }

    trex.collide(invisibleGround);

    console.log(trex.y)
    drawSprites();
    }
