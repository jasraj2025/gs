noseX = 0;
noseY = 0;

function preload(){
    clownNose= loadImage('https://i.postimg.cc/L5DQW9rV/m.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size('300,300');
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);

    poseNet.on('pose',gotPoses);
}


function take_snapshorts(){
    save('picture.png');
}

function modelLoaded(){
    console.log('model loaded');
}

function gotPoses(results){
   if(results.length > 0){
     console.log(results);
     noseX=results[0].pose.nose.x-200;
     noseY=results[0].pose.nose.y-130;
     console.log('x = '+ noseX); 
     console.log('y =' + noseY);
   }
}

function draw(){
    image(video,0,0,300,300);
   // fill(250,0,0);
   // stroke(0,0,20);
    //circle(noseX,noseY,20);
    image(clownNose,noseX,noseY,30,30);
    
}