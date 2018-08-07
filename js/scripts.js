$(document).ready(function() {

  $("#bark").click(function() {
    $("#doggo").prepend("<li>Bark! Bark! Bark!</li>");
    $("#kitty").prepend("<li>Meow! Meow! Meow!!</li>");
  });

  $("#meow").click(function() {
    $("#kitty").prepend("<li>Meow! Meow! Meow!!</li>");
    $("#doggo").prepend("<li>Bark! Bark! Bark!</li>");
  });




  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#normal").click(function() {
    $("body").removeClass();
  });

});
