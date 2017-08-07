var userInput;
var total = 0;
var complete = 0;

function storeIt() {
  userInput = $("input").val();
}

function appendItem(x) {
  $("ul").append(x);
}


$(document).ready(function() {

  $("h2").text("All done!");

  $("#addItem").on("click", function() {
    storeIt();
    appendItem("<li>" + userInput + "</li>");
    $("input").val(" ");
    total += 1;
    $("h2").text("You have " + total + " things to do!");

  });

  $(document).keypress(function(e) {
    if (e.which == 13) {
      storeIt();
      appendItem("<li>" + userInput + "</li>");
      $("input").val(" ");
      total += 1;
      $("h2").text("You have " + total + " things to do!");
    }
  });

  $("#list").on("click","li",function() {
    $(this).addClass("completed");
    total = total-1;
    $("h2").text("You have " + total + " things to do!");
  });

  $("#clearAll").on("click", function(){
    $("ul").empty();
    total = 0;
    $("h2").text("All done!");
  });

  $("#clearComp").on("click", function(){
    $(".completed").empty();
  });

});
