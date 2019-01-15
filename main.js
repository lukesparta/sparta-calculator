var calcStatus;

//Calculation fucntion
function calculation(num1, num2, op){
  if(op === "+"){
    var anotherCalc = prompt(`${firstNum} + ${secondNumber} = ${parseFloat(num1) + parseInt(num2)}\n\nWould you like to make a new calculation?`);

        if(anotherCalc.toLowerCase() == "yes"){
          calcStatus = true;
        }
        else{
          calcStatus = false
        }
  }
  else if(op === "-"){
    var anotherCalc = prompt(`${firstNum} - ${secondNumber} = ${parseFloat(num1) - parseInt(num2)}\n\nWould you like to make a new calculation?`);

        if(anotherCalc.toLowerCase() == "yes"){
          calcStatus = true;
        }
        else{
          calcStatus = false
        }
  }
  else if(op === "*"){
    var anotherCalc = prompt(`${firstNum} * ${secondNumber} = ${parseFloat(num1) * parseInt(num2)}\n\nWould you like to make a new calculation?`);

    if(anotherCalc.toLowerCase() == "yes"){
      calcStatus = true;
    }
    else{
      calcStatus = false
    }
  }
  else{
    var anotherCalc = prompt(`${firstNum} / ${secondNumber} = ${parseFloat(num1) / parseInt(num2)}\n\nWould you like to make a new calculation?`);

        if(anotherCalc.toLowerCase() == "yes"){
          calcStatus = true;
        }
        else{
          calcStatus = false
        }
  }
}


//BMI Calculator Function
function bmiCalc(kg, cm){
  var anotherCalc = prompt(`Your BMI is ${parseFloat(Math.round(kg/((cm/100)*(cm/100)))).toFixed(2)}.\n\nWould you like to make another calculation?`);
  if(anotherCalc.toLowerCase() == "yes"){
    calcStatus = true;
  }
  else{
    calcStatus = false
  }
}


//Cel to F Calculator Fucntion
function ctoF(c){
  var conAnswer = prompt(`${c}°C is ${(c*(9/5))+32}°F.\n\nWould you like to make another calculation?`);
  if(conAnswer.toLowerCase() == "yes"){
    calcStatus = true;
  }
  else{
    calcStatus = false
  }
}



//Main Code
var start = prompt("Hi, would you like to make a calculation?");

if(start.toLowerCase() == 'yes'){
  calcStatus = true;
}
else{
  calcStatus = false;
}

while (calcStatus) {
  var calcType = prompt("What  calculator would you like to use?\n\n(1) Basic\n(2) Advance");

  //Basic Calculator
  if (calcType == "1") {
    var operation = prompt("What operation would you like to use?\n\n(1) Addition\n(2)Subtraction\n(3) Multiplication\n(4) Division");

    switch (operation) {
      //Addition
      case "1":
        var firstNum = prompt("Please enter your first number.");
        var secondNumber = prompt("Please enter your second number.");

        calculation(firstNum, secondNumber, "+")
        break;

        //Subtraction
      case "2":
        var firstNum = prompt("Please enter your first number.");
        var secondNumber = prompt("Please enter your second number.");

        calculation(firstNum, secondNumber, "-")
        break;

        //Multiplication
      case "3":
        var firstNum = prompt("Please enter your first number.");
        var secondNumber = prompt("Please enter your second number.");

        calculation(firstNum, secondNumber, "*");
        break;
        //Division
      case "4":
        var firstNum = prompt("Please enter your first number.");
        var secondNumber = prompt("Please enter your second number.");

        calculation(firstNum, secondNumber, "/");
        break;

      default:
        break;
    }
  }
  //Advance Calulator
  else {
    var bmiOrConvert = prompt("What woud you like to use the Advance Calculator for?\n\n(1) BMI Calculator\n(2) Celcius to Farenheit Conversion")

    if(bmiOrConvert == "1"){
      var weight = prompt("What is your weight in kg (kilograms)?");
      var height = prompt("What is your height in cm (centermeters)?");

      bmiCalc(weight, height);
    }
    else{
      var celcius = prompt("What is the tempeture in celcius you want to convert to farenheit?");

      ctoF(celcius);
    }
  }
}

alert("Thank you for using my calculator.");