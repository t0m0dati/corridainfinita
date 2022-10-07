var cleiton,cleitonImg;
var fundoImg,fundo;
var invisiblechao
var PLAY=1;
var END=0;
var gameState=PLAY;
var invisiblechao;

function preload(){

 cleitonImg= loadAnimation("cleiton1.png", "cleiton2.png");
  
 fundoImg=loadImage("fundo.png");

}

function setup() {
createCanvas(600,600);



cleiton = createSprite(50,200,50,50);
cleiton.scale=0.60;
cleiton.addAnimation("running",cleitonImg);

invisiblechao=createSprite(500,600,1100,50);
invisiblechao.visible=false;

}


function draw()
 {
    background(fundoImg);

    if (gameState===PLAY)
    {
        fundoImg.velocityX=0;

       
        if(fundoImg.x<0)
        {
            fundoImg.x= fundo.width/2
        }

        if (keyDown("space") && cleiton.y >=100){
            cleiton.velocityY=-13;
        }

        cleiton.velocityY=cleiton.velocityY+0.8
      
    }


    else if (gameState===END)
    {

   invisiblechao.velocityX=0;
    } 

    cleiton.collide(invisiblechao);
    
   
    drawSprites();

    }
   