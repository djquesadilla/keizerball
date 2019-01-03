let awayScore = 0;
let keizerScore = 0;

$( function() {
  $("#keizerball").click( function() {
    $(this).animate({ top: "-=100%" }, 400, function() {
      $(this).animate({ top: "+=100%" }, 0);
    });
    keizerScore++;
    $("#scoreboard .keizerscore").text(keizerScore);
    if (keizerScore >= 3 && Math.ceil(Math.random() * (keizerScore * 2)) > Math.ceil(keizerScore/2)) {
      awayScore++;
      $("#scoreboard .awayscore").text(awayScore);
    }
  });
});
