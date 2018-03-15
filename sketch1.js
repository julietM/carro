
var rectX=0;
function setup(){
createCanvas(1350,620);

}
function draw(){

    background(5,133,52);

    fill(6,158,168);
    rect(100,150,195,40);

    fill(6,158,168);
    rect(150,100,100,50);

    fill(0,0,0);
    ellipse(150,200,50,50);
    
    fill(0,0,0);
    ellipse(240,200,50,50);

    fill(255, 254, 251 );
    rect(rectX,240,75,20);
    rectX=rectX+10;
    

}