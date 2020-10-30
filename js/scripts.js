function numberSwapper(userNumber) {
  let numberSwapArray = [];
  for (let i = 0; i <= userNumber; i++) {
    if (i.toString().indexOf("3") >= 0) {
      numberSwapArray[i] = " Won't you be my neighbor?";
    }
    else if (i.toString().indexOf("2") >= 0) {
      numberSwapArray[i] = " Boop!";
    }
    else if (i.toString().indexOf("1") >= 0) {
      numberSwapArray[i] = " Beep!";
    }
    else {
      numberSwapArray[i] = " ".concat(i.toString()); 
    }
  }
  return numberSwapArray;
}

$(document).ready(function() {
  $("#numberInput").submit(function(event) {
    event.preventDefault();
    let swappedArray = numberSwapper($("#number").val());
    $("#message, img").hide("");
    $("#message").text(swappedArray);
    $("#message, img").fadeIn("slow");
  });
});