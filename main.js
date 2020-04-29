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
});

//User inputs rgb value to convert to hex
$("#convert-hex-btn").click(function(){
    //Stores user inputs
    let redValue = $("#red-input").val();
    let greenValue = $("#green-input").val();
    let blueValue = $("#blue-input").val();

    //Ensure valid inputs
    if(redValue<0 || redValue > 255 || 
       greenValue<0 || greenValue > 255 ||
       blueValue<0 || blueValue > 255 ){
           alert("Please enter values between 0 & 255.");
       }

    //Run the conversion
    let hexValue = rgb(redValue, greenValue, blueValue);

    $(body).css("background-color", hexValue);

}); //End RGB -> Hex



});//end jQuery

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
    return "#"+hexArray[0].concat(hexArray[1],hexArray[2]);
  }

/*
  $("#conversion-chosen").click(function(){
    $(body).css("background-color", "//color goes here");
});
*/