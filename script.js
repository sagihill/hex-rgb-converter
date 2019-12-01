var hexinput=document.getElementById("hexuserinput");
var hexbutton=document.getElementById("hexconvert");
var rgbinput=document.getElementById("rgbuserinput");
var rgbbutton=document.getElementById("rgbconvert");

function convertHexToRGB(hexString){
	if(hexString[0]==='#'){
		hexString = hexString.substr(1);
	}
	hexString = hexString.toUpperCase();
	let rgbArray = [] ;
	let numToArray = 0;
	for(let i=0; i<hexString.length-1; i = i+2){
		let num1 = hexString.charCodeAt(i);
		let num2 = hexString.charCodeAt(i+1);
		if(num1>64){
			numToArray += (num1-55)*(16)
		}
		else{
			numToArray += (num1-48)*(16)
		}
		if(num2>64){
			numToArray += (num2-55)
		}
		else{
			numToArray += (num2-48)
		}
		rgbArray.push(numToArray);
		numToArray = 0
	}
	document.getElementById('rgbuseroutput').value = `${rgbArray[0]},${rgbArray[1]},${rgbArray[2]}`;
}

function convertRGBToHex(rgbArray){
	let hexString = "" ;
	for (rgbValue of rgbArray){
		let num2 = rgbValue%16;
		let num1 = (rgbValue-num2)/16;
		if (num1<10){
			hexString+=num1.toString();
		}
		else {
			hexString+=String.fromCharCode(num1+55);
		}
		if (num2<10){
			hexString+=num2.toString();
		}
		else {
			hexString+=String.fromCharCode(num2+55);
		}
	}
	document.getElementById('hexuseroutput').value = hexString;
}

function hexInputLength(){
	return hexinput.value.length;
}

function rgbInputLength(){
	return rgbinput.value.length;
}

function convertHexAfterClick(){
    if (hexInputLength()>0){
    	hextext = document.createTextNode(hexinput.value).data;
    	convertHexToRGB(hextext);
    }
}

function convertHexAfterKeypress(event){
	  if (hexInputLength()>0 && event.keyCode===13){
	  	hextext = document.createTextNode(hexinput.value).data;
	  	convertHexToRGB(hextext);
	  }
}

function convertRGBAfterClick(){
    if (rgbInputLength()>0){
    	rgbtext = document.createTextNode(rgbinput.value).data;
    	rgbArray = strToIntArray(rgbtext);
    	convertRGBToHex(rgbArray);
    }
}

function convertRGBAfterKeypress(event){
	  if (rgbInputLength()>0 && event.keyCode===13){
    	rgbtext = document.createTextNode(rgbinput.value).data;
    	rgbArray = strToIntArray(rgbtext);
    	convertRGBToHex(rgbArray);
	  }
}

function strToIntArray(str){
	let array = str.split(",");
	let numArray = array.map(char => Number(char));
	return numArray;
}

hexbutton.addEventListener("click",convertHexAfterClick);
hexinput.addEventListener("keypress",convertHexAfterKeypress);
rgbbutton.addEventListener("click",convertRGBAfterClick);
rgbinput.addEventListener("keypress",convertRGBAfterKeypress);