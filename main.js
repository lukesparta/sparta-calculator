var calcStatus;
//Calculation fucntion
function calculation(num1, num2, op) {
  if (op === "+") {
    var anotherCalc = prompt(`${firstNum} + ${secondNumber} = ${parseFloat(num1) + parseInt(num2)}\n\nWould you like to make a new calculation?`);

    if (anotherCalc.toLowerCase() == "yes") {
      calcStatus = true;
    } else {
      calcStatus = false
    }
  } else if (op === "-") {
    anotherCalc = prompt(`${firstNum} - ${secondNumber} = ${parseFloat(num1) - parseInt(num2)}\n\nWould you like to make a new calculation?`);

    if (anotherCalc.toLowerCase() == "yes") {
      calcStatus = true;
    } else {
      calcStatus = false
    }
  } else if (op === "*") {
    anotherCalc = prompt(`${firstNum} * ${secondNumber} = ${parseFloat(num1) * parseInt(num2)}\n\nWould you like to make a new calculation?`);
    if (anotherCalc.toLowerCase() == "yes") {
      calcStatus = true;
    } else {
      calcStatus = false
    }
  } else {
    var anotherCalc = prompt(`${firstNum} / ${secondNumber} = ${parseFloat(num1) / parseInt(num2)}\n\nWould you like to make a new calculation?`);
    if (anotherCalc.toLowerCase() == "yes") {
      calcStatus = true;
    } else {
      calcStatus = false
    }
  }
}
//BMI Calculator Function
function bmiCalc(kg, cm) {
  var anotherCalc = prompt(`Your BMI is ${parseFloat(Math.round(kg/((cm/100)*(cm/100)))).toFixed(2)}.\n\nWould you like to make another calculation?`);
  if (anotherCalc.toLowerCase() == "yes") {
    calcStatus = true;
  } else {
    calcStatus = false
  }
}
//Cel to F Calculator Fucntion
function cToF(c) {
  var conAnswer = prompt(`${c}°C is ${parseFloat(Math.round((c*(9/5))+32)).toFixed(2)}°F.\n\nWould you like to make another calculation?`);
  anotherCalc();
}
//Decision to continue Function
function anotherCalc() {
  if (anotherCalc.toLowerCase() == "yes") {
    calcStatus = true;
  } else {
    calcStatus = false
  }
}
//Basic Calculation Fucntion
function basicCalcNum(operation) {
  var firstNum = prompt("Please enter your first number.");
  var secondNumber = prompt("Please enter your second number.");

  calculation(firstNum, secondNumber, operation);
}
//Main Code
var start = prompt("Hi, would you like to make a calculation?");
anotherCalc();
while (calcStatus) {
  var calcType = prompt("What  calculator would you like to use?\n\n(1) Basic\n(2) Advance");
  //Basic Calculator
  if (calcType == "1") {
    var operation = prompt("What operation would you like to use?\n\n(1) Addition\n(2)Subtraction\n(3) Multiplication\n(4) Division");
    switch (operation) {
      //Addition
      case "1":
        basicCalcNum("+")
        break;

        //Subtraction
      case "2":
        basicCalcNum("-")
        break;

        //Multiplication
      case "3":
        basicCalcNum("*");
        break;
        //Division
      case "4":
        basicCalcNum("/");
        break;

      default:
        alert("Please enter a number from 1 - 4.");
        break;
    }
  }
  //Advance Calulator
  else {
    var bmiOrConvert = prompt("What woud you like to use the Advance Calculator for?\n\n(1) BMI Calculator\n(2) Celcius to Farenheit Conversion")
    if (bmiOrConvert == "1") {
      var weight = prompt("What is your weight in kg (kilograms)?");
      var height = prompt("What is your height in cm (centermeters)?");
      bmiCalc(weight, height);
    } else {
      var celcius = prompt("What is the tempeture in celcius you want to convert to farenheit?");
      cToF(celcius);
    }
  }
}
alert("Thank you for using my calculator.");