$(document).ready(function(){  //jQuery
 
//User selects which type of conversion they want to do. 
$("#conversion-chosen").click(function(){
    //Stores user choice
    let choice = $("#conversion-selector").val();
    //Hides chooser
    $("#choose-conversion").hide();
    //Shows chosen conversion inputs
    if (choice=="rgb-to-hex"){
        $("#rgb-to-hex-input").show();
    }
    else if(choice=="hex-to-rgb"){
        $("#hex-to-rgb-input").show();
    }
    //Shows reset button
    $("#reload").show();
});

//User inputs rgb value to convert to hex
$("#convert-hex-btn").click(function(){
    //Stores user inputs
    let redValue = parseInt($("#red-input").val());
    let greenValue = parseInt($("#green-input").val());
    let blueValue = parseInt($("#blue-input").val());

    //Ensure valid inputs
    if(redValue<0 || redValue > 255 || 
       greenValue<0 || greenValue > 255 ||
       blueValue<0 || blueValue > 255 ){
           alert("Please enter values between 0 & 255.");
       }

    //Run the conversion
    let hexValue = rgb(redValue, greenValue, blueValue);

    //Change the background color to match the input color ;)
    $(body).css("background-color", hexValue);

    //Display the converted RGB value as HEX
    $("#hex-value-result").text(hexValue);
}); //End RGB -> Hex

//Function to convert RGB to Hex
function rgb(r, g, b){
    let rgbArray=[r,g,b];
    let hexArray=[];
    for (let value of rgbArray){
      if (value===0){       //input value too low
        hexArray.push("00");
      }
      else {                //convert valid values > 0
        hexArray.push(value.toString(16).toUpperCase());
      }
    } 
    return "#" + hexArray[0].concat(hexArray[1],hexArray[2]);
  }

// User chooses to convert Hex to rgb
$("#convert-rgb-btn").click(function(){
    //Stores user input
    let hexValue = $("#hex-input").val();
    //Check for valid hex value
    let hexRegEx = /^#([0-9a-fA-f]{6})$/g;
    if (hexRegEx.test(hexValue)===false){
        alert ("Invalid Hex Value. Hex value must contain # followed by a combination of six characters comprising digits 0-9 and letters A-F.");
    }
    
   

});




//Resets the page
$("#reload-btn").click(function(){
    location.reload();
});



});//end jQuery
