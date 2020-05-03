$(document).ready(function(){  //jQuery
 
//User selects which type of conversion they want to do. 
$("#conversion-chosen").click(function(){
    //Stores user choice
    let choice = $("#conversion-selector").val();
    //Hides chooser
    $("#choose-conversion").hide();
    //Shows chosen conversion inputs
    if (choice==="selected"){
        alert("You must choose a conversion.");
        location.reload();
    }

    else if (choice=="rgb-to-hex"){
        $("#rgb-to-hex-input").show();
    }
    else if(choice=="hex-to-rgb"){
        $("#hex-to-rgb-input").show();
    }
    //Shows reset button
    $("#reload").show();
});

//RGB TO HEX CONVERSION
$("#convert-hex-btn").click(function(){
    //Stores user inputs
    let redValue = $("#red-input").val();
    let greenValue = $("#green-input").val();
    let blueValue = $("#blue-input").val();

    //Ensure all inputs entered
    if (redValue==="" || greenValue==="" || blueValue===""){
        alert("You must enter three numerical values.");
        $(body).css("background-color", "white");
    }   

    //Ensure valid inputs
    else if(parseInt(redValue)<0 || parseInt(redValue)> 255 || 
            parseInt(greenValue)<0 || parseInt(greenValue) > 255 ||
            parseInt(blueValue)<0 || parseInt(blueValue) > 255 ){
                alert("Please enter values between 0 & 255.");
                $(body).css("background-color", "white");
       }
    else{
    //Run the conversion
    let hexValue = rgb(redValue, greenValue, blueValue);
    //Change the background color to match the input color ;)
    $(body).css("background-color", hexValue);
    //Display the converted RGB value as HEX
    $("#hex-value-result").text(hexValue);
    }
}); //End RGB -> Hex

//Helper function to convert RGB to Hex
function rgb(r, g, b){
    let rgbArray=[parseInt(r),parseInt(g),parseInt(b)];
    let hexArray=[];
  //Makes the conversion to hex
    for (let value of rgbArray){
      if (value===0){       //input value is zero
        hexArray.push("00");
      }
      else {                //convert valid values > 0
        hexArray.push(value.toString(16).toUpperCase());
      }
    } 
  //Maintains leading zero for single digit values
    for (let i=0; i<3; i++){
      if (hexArray[i].length===1){
        hexArray[i]="0".concat(hexArray[i]);
      }
    }
    return "#" + hexArray[0].concat(hexArray[1],hexArray[2]);
  }

// HEX TO RGB CONVERSION
$("#convert-rgb-btn").click(function(){
    //Stores user input
    let hexValue = $("#hex-input").val();
    //Check for valid hex value
    let hexRegEx = /^#([0-9a-fA-f]{6})$/g;
    if (hexRegEx.test(hexValue)===false){
        alert ("Invalid Hex Value. Hex value must contain # followed by a combination of six characters comprising digits 0-9 and letters A-F.");
        $(body).css("background-color", "white");
    }
    //Input is valid
    else{
        //Run the conversion
        let rgbValue = hexToRGB(hexValue);
        //Change the background color to match the input color ;)
        $(body).css("background-color", hexValue);
        //Display the converted Hex as rgb
        $("#rgb-value-result").text(rgbValue);
    }
}); //End Hex -> RGB

//Function to convert Hex value to RGB value
function hexToRGB (hex){
    //Break the hex value up into pairs in an array
    let hexArray =[];
    let sliceIndex=0;
    //Remove the # from the front of the hex value for conversion
    hex = hex.substring(1);
    //Break the hex value into pairs for conversion and store in an array
    for (let i=0;i<3;i++){
      hexArray.push(hex.slice(sliceIndex,sliceIndex+2));
      sliceIndex = sliceIndex + 2;
    }
    //Convert Hex Values to RGB Values
    let rgbArray=[];
    for (let i=0;i<3;i++){
      let rgbValue = parseInt(hexArray[i],16);
      rgbArray.push(rgbValue);
    }  
    return "rgb("+rgbArray[0] + ", " + rgbArray[1] + ", " + rgbArray[2]+")";
  }

//Resets the page
$("#reload-btn").click(function(){
    location.reload();
});
});//end jQuery
