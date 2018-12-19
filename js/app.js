var score = 0;

$( function() {
  $("#keizerball").click( function() {
    $(this).animate({ top: "-=100%" }, 400, function() {
      $(this).animate({ top: "+=100%" }, 0);
    });
    score += 1;
  })
});