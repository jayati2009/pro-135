function setup(){
    canvas= createCanvas(360, 360);
    canvas.center();
}
function start(){
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
}

