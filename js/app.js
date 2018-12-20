var keizerscore = 0;
var awayscore = 0;

$( function() {
  $("#keizerball").click( function() {
    $(this).animate({ top: "-=100%" }, 400, function() {
      $(this).animate({ top: "+=100%" }, 0);
    });
    keizerscore += 1;
    $("#scoreboard .keizerscore").text(keizerscore);
    if (keizerscore % 3 == 0) {
      awayscore += 1;
      $("#scoreboard .awayscore").text(awayscore);
    }
  })
});