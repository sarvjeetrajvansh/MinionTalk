var btnConvert=document.querySelector("#btn-convert");
var txtInput=document.querySelector("#txt-input");
   
function clickHandler(){

    setMessage("txt-output","Processing.....");
   
    if(txtInput.value=="" || txtInput.value==null || txtInput.value==undefined ){

        setMessage("errorLabel","*please enter your thoughts first");
        setMessage("txt-output","Meh!! No thoughts to translate...");
        return;
    }
       
         fetch(urlConstructor(txtInput.value))
        .then(response => response.json())
        .then(data => {setMessage("txt-output",data.contents.translated.toString())})
}

function urlConstructor(input){
    return "https://api.funtranslations.com/translate/minion.json?text="+input;
}

function setMessage(id,Message){
    document.getElementById(id).innerHTML=Message;
}
function cleanError(){
    document.getElementById("errorLabel").innerHTML="";
   document.getElementById("txt-output").innerHTML="";
}
txtInput.addEventListener("input",cleanError);
btnConvert.addEventListener("click",clickHandler);