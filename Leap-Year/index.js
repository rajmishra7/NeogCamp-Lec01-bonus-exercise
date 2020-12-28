var readlineSync = require("readline-sync");
var username = readlineSync.question("Enter your name : ");
var year = readlineSync.question("Welcome "+username+" ! Plz enter your year of birth : ");

function checkInput(year){
  if(isNaN(year)||year<0){
    console.log("Invalid Input");
  }else{
    checkYear(year);
  }
}

function checkYear(year){
  if(year%400 ===0||(year%4===0&&year%100!=0)){
    console.log("Leap Year");
  }
  else{
    console.log("Not a Leap Year");
  }
}

checkInput(year);