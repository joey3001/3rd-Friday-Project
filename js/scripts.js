$(document).ready(function() {
  $("#numberInput").submit(function(event){
    event.preventDefault();
    let number = $("#number").val();
    let numberArray = []; 
    for (let i = 0; i <= number; i++) {
      numberArray[i] = " ".concat(i.toString()); 
      let individualDigits = i.toString().split("");
      for (let index = 0; index <= individualDigits.length; index++) {
        if (individualDigits[index] === "2") {
          numberArray[i] = " Boop!";
          break;
        }
        else if (individualDigits[index] === "1") {
          numberArray[i] = " Beep!";
        }
      }
    }
    alert(numberArray);
  });
});