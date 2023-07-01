noseX = 0;
noseY = 0;

function setup(){
    canvas = createCanvas(400,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400,300);
    video.hide();

    poseNetvar= ml5.poseNet(video, modelLoaded);
    poseNetvar.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initailized.")
}

function draw(){
    image(video,0,0,400,300);
    image(filter, noseX-20, noseY, 50, 30)
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function preload(){
    filter = loadImage("https://i.postimg.cc/Hn9gmGn9/moostacheee.png");
}

function takesnapshot(){
    save("mymoostache.jpg")
}