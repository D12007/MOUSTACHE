lip_x="";
lip_y="";
function preload(){
    moustache=loadImage("moustache.png")
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",getposes);
}
function draw(){
    image(video,0,0,500,500);
    image(moustache,lip_x-50,lip_y+10,100,35);
}
function modelloaded(){
    console.log("posenet model is loaded");
}
function getposes(results){
    if(results.length>0){
        console.log(results);
        lip_x=results[0].pose.nose.x;
        lip_y=results[0].pose.nose.y;
        console.log(lip_x,lip_y);
    }
}
function take_snapshot(){
    save('MUSTACH FILTER.jpg');
}