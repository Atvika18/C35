var ball;
var db;
var dbPos, dbRef;

function setup(){
    db = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    dbRef = db.ref("ball/position")
    dbRef.on("value", readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+5);
    }
    drawSprites();
}


function readPosition(value)
{
dbPos = value.val()
ball.x = dbPos.x;
ball.y = dbPos.y;
}

function writePosition(x,y)
{
db.ref("ball/position").set(
{
x : ball.x +x,
y : ball.y+y,
}
)
}
