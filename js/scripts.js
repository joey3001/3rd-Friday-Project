$(document).ready(function() {
  $("#numberInput").submit(function(event){
    event.preventDefault();
    let number = $("#number").val();
    let numberArray = []; 
    for (let i = 0; i <= number; i++) {
      numberArray[i] = i; 
      let digits = i.toString().split("");
      for (let index = 0; index <= digits.length; index++) {
        if (digits[index] === "1") {
          numberArray[i] = "Beep!";
          break;
        }
      }
    }
    alert(numberArray);
  });
});