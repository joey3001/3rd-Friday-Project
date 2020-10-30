$(document).ready(function() {
  $("#numberInput").submit(function(event){
    event.preventDefault();
    let number = $("#number").val();
    let numberArray = []; 
    let y = 0; 
    for (let i = 0; i <= number; i++) {
      numberArray[i] = i; 
      if (i > 9) {
        let digits = i.toString().split("");
        alert(digits);
      }
    }
  });
});