Webcam.set ({
    width:350,
    height:300,
    image_format:'png'
});

camera= document.getElementById("camera");
Webcam.attach ('#camera');

function takeSnapshot()
{
    webcam.snap(function(data_uri) 
    {
        document.getElementById("result_emo").innerHTML= '<img id="captured_img" src="' +data_uri+ '"/>';}
    
    )}

    console.log('ml5 version', ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Ic_59RyFw/model.json', modelLoaded)

    function modelLoaded() {
        console.log("modelLoaded");
    }
   
    function speak(){
        var synth= window.speakSynthesis
        speak_data_1="The first prediction is" + prediction_1
        speak_data_2="And the second prediction is" + prediction_2
        var utterThis= new SpeechSynthesisUtterance (speak_data_1 + speak_data_2);
        synth.speak(utterThis)
    }
