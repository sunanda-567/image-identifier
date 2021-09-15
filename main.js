Webcam.set({
    width:310 , 
    heigh:300 ,
    image_format:'png', 
    png_quality:90 , 

    constraints:{
     facingMode:"enviornment"
    }
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot(){
Webcam.snap(function (data_uri)
{
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+ data_uri +' ">/'
}
);
}

console.log('ml5 version:', ml5.version);
var classifier=ml5.imageClassifier('MobileNet',modelLoaded);
function modelLoaded()
{
console.log("modelLoaded")
}
function check()
{
var img=document.getElementById('captured_image');
classifier.classify(img, gotResult);
}
function gotResult(error, result)
{
    if (error){
        console.log(error);
    }

    else {
        console.log(result);

        document.getElementById("object_name").innerHTML=result[0].label
    }
}