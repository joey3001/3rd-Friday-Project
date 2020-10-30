$(document).ready(function() {
  $("#numberInput").submit(function(event){
    event.preventDefault();
    let number = $("#number").val();
    let numberArray = []; 
    for (let i = 0; i <= number; i++) {
      numberArray[i] = " ".concat(i.toString()); 
      let individualDigits = i.toString();
        if (individualDigits.indexOf("3") >= 0) {
        numberArray[i] = " Won't you be my neighbor?";
        }
        else if (individualDigits.indexOf("2") >= 0) {
          numberArray[i] = " Boop!";
        }
        else if (individualDigits.indexOf("1") >= 0) {
          numberArray[i] = " Beep!";
        }
      }
    alert(numberArray);
  });
});