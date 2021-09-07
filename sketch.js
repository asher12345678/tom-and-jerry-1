var bgImage;
var cat;
var mouse;

function preload() {
    //load the images here
    bgImage = loadImage("images/garden.png");

    catImage1 = loadAnimation("images/cat1.png");
    catImage2 = loadAnimation("images/cat2.png" , "images/cat3.png");
    catImage3 = loadAnimation("images/cat4.png");

    mouseImage1 = loadAnimation("images/mouse1.png");
    mouseImage2 = loadAnimation("images/mouse2.png" , "images/mouse3.png");
    mouseImage3 = loadAnimation("images/mouse4.png");
}

function setup()
{
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,680);
    cat.addAnimation("catSleeping",catImage1);
    cat.scale = 0.2;

    mouse = createSprite(100,680);
    mouse.addAnimation("mouseEating",mouseImage1);
    mouse.scale = 0.2;

}

function draw() {
    background(bgImage);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x <(cat.width - mouse.width)/2)
    {
        cat.velocityX = 0;
        cat.addAnimation("catSitting",catImage3);
        cat.changeAnimation("catSitting");
        cat.x = 300;
        cat.scale = 0.2;

        mouse.addAnimation("mouseHappy",mouseImage3);
        mouse.changeAnimation("mouseHappy");
        mouse.scale = 0.2;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW)
    {
        mouse.addAnimation("mouseTeasing",mouseImage2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25;

        cat.velocityX = -5;
        cat.addAnimation("catMoving",catImage2);
        cat.changeAnimation("catMoving");
        cat.frameDelay = 10;
    }

}
