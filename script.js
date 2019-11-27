function convertHexToRGB(hexString){
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
	return rgbArray ; 
}

function convertRGBToHex(rgbArray){
	let hexString = "" ;
	for (rgbValue of rgbArray){
		let num2 = rgbValue%16;
		let num1 = (rgbValue-num2)/16;
		debugger;
		if (num1<10){
			debugger;
			hexString+=num1.toString();
		}
		else {
			debugger;
			hexString+=String.fromCharCode(num1+55);
		}
		if (num2<10){
			debugger;
			hexString+=num2.toString();
		}
		else {
			debugger;
			hexString+=String.fromCharCode(num2+55);
		}
	}
	return hexString;
}

const newRGBColor = [255,53,34];

convertRGBToHex(newRGBColor);
var body = doc