var btnConvert=document.querySelector("#btn-convert");
var txtInput=document.querySelector("#txt-input");
   
function clickHandler(){
    document.getElementById("txt-output").innerHTML="Processing.....";
   
    if(txtInput.value=="" || txtInput.value==null || txtInput.value==undefined ){

        document.getElementById("errorLabel").innerHTML="*please enter your thoughts first";
        document.getElementById("txt-output").innerHTML="Meh!! No thoughts to translate...";
        return;
    }
         // txtOutput=txtInput.value;
        // document.getElementById("txt-output").innerHTML=txtOutput;
         fetch(`https://api.funtranslations.com/translate/minion.json?text=${txtInput.value}`)
        .then(response => response.json())
        .then(data => {document.getElementById("txt-output").innerHTML=data.contents.translated.toString()});
}
function cleanError(){
    document.getElementById("errorLabel").innerHTML="";
    document.getElementById("txt-output").innerHTML="";

}

txtInput.addEventListener("input",cleanError);
btnConvert.addEventListener("click",clickHandler);