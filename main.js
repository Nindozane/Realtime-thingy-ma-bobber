noseX=0;
noseY=0;

difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(1000, 600);
    video.position(20,150)

    canvas = createCanvas(1000, 600);
    canvas.position(900,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet IS Initialized!');
}

function draw() {
    background('#969A97');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
    }
} 

function draw() {
    background('#000000');

    document.getElementById("circle_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
    fill('#7FFFD4');
    stroke('#7FFFD4');
    circle(noseX, noseY, difference);
}