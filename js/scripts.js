function numberSwapper(userNumber) {
  let numberSwapArray = [];
  for (let i = 0; i <= userNumber; i++) {
    numberSwapArray[i] = " ".concat(i.toString()); 
    if (i.toString().indexOf("3") >= 0) {
      numberSwapArray[i] = " Won't you be my neighbor?";
    }
    else if (i.toString().indexOf("2") >= 0) {
      numberSwapArray[i] = " Boop!";
    }
    else if (i.toString().indexOf("1") >= 0) {
      numberSwapArray[i] = " Beep!";
    }
  }
  return numberSwapArray;
}

$(document).ready(function() {
  $("#numberInput").submit(function(event) {
    event.preventDefault();
    let numberArray = numberSwapper($("#number").val());
    $("#content > *").hide("");
    $("#message").text(numberArray.toString());
    $("#message").fadeIn("slow");
    $("img").fadeIn("slow");
  });
});