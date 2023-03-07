function preload () {}
function setup () {
    canvas=createCanvas(400,300);
    canvas.center();
function draw(){
    image(video,0,0,400,300);
}
function take_snapshot (){
    save('myimage.png');
}
