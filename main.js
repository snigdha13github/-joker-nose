function setup()
{
    c1=createCanvas(800,500);
    c1.center();
    v1=createCapture(VIDEO);
    v1.hide();
    pn=ml5.poseNet(v1,modelLoaded);
    pn.on("pose",gotPoses);
}
function draw()
{
    image(v1,0,0,800,500);
    image(clown_nose,nosex,nosey,60,60);
}
function download()
{
    save("joker.png");
}
function modelLoaded()
{
    console.log("posenet has loaded");
}
nosex=0;
nosey=0;
function gotPoses(results)
{
    if(results.length>0)
    {
        nosex=results[0].pose.nose.x+80;
        nosey=results[0].pose.nose.y;
    }
}
function preload()
{
    clown_nose=loadImage("https://i.postimg.cc/xd9LWVDj/clownnose.png");
}