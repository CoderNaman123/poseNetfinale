musX = "";
musY = "";
hatX = "";
hatY ="";

function preload()
{
    mustache = loadImage('https://i.postimg.cc/qqbnpKpb/m.png');
    //hat = loadImage('https://i.postimg.cc/2y7GhGn0/Pngtree-vector-chef-hat-6045895.png');
}

function setup()
{
  canvas = createCanvas(350,350);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  video.size(350,350);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
  console.log('posnet is initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
      musX = results[0].pose.nose.x-25;
    musY = results[0].pose.nose.y-5;
   
    console.log("musX = " + musX);
   console.log("musY = " + musY);

  // hatX = results[0].pose.nose.x-100;
  // hatY = results[0].pose.mose.y-50;

   //console.log("hatX = " + hatX);
   //console.log("hatY = " + hatY);
    }
}


function draw()
{
  image(video, 0,0,350,350);
  image(mustache, musX, musY, 50,50);
 // image(hat, hatX, hatY, 200,200);
}

function snapshot()
{
    save('myFilteredimage.png');
}
