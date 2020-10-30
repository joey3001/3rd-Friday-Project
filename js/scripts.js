$(document).ready(function() {
  $("#numberInput").submit(function(event){
    event.preventDefault();
    let number = $("#number").val();
    let numberArray = []; 
    for (let i = 0; i <= number ; i++) {
      numberArray[i] = i 
      alert(numberArray);
    }
  });
});