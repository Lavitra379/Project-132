status =""

function preload()
{
    loadImage("gun.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.position(590, 400)
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_gun").innerHTML = "Status : Detecting Objects";
    document.getElementById("objects_gun").innerHTML = "Guns Detected : Numbers"
  }

  function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
  }

  function gotResult(error, results) 
  {
    if (error) {
      console.log(error);
    }
    console.log(results);
  }