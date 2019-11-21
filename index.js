var cvs = document.getElementById("canvas");
var ctx = cvs.getcontext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "image/bird.png";
bg.src = "bg.png";
fg.src = "fg.png";
pipeNorth.src = "pipeNorth.png";
pipeSouth.src = "pipeSouth.png";
var img=document.getElementById("bird");

var gap = 85;
var constant = pipeNorth.height+gap;

var bX = 10;
var bY = 150;

function draw(){
    ctx.drawImage(bg,0,0);

    ctx.drawImage(pipeNorth,100,0);
    ctx.drawImage(pipeSouth,100,o+constant);

    ctx.drawImage(fg,0,cvs.height - fg.height);
    ctx.drawImage(bird,10,150);

}