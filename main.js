function preload(){

}
function setup(){
canvas=createCanvas(600,479);
canvas.position(500,100);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw(){
image(video,0,0,600,479);
tint(tint_color);
}
function add_filter(){
    tint_color=document.getElementById("filter_name").value;
}
function take_snapshot(){
    save('Filtered Image.png');
}