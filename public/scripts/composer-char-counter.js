const MAX_CHARACTERS = 140;

$(document).ready(function() {
  $(".new-tweet textarea").on("input", function() {
    // grab the value inside of the textarea
    const text = $(this).val();
    // length of string
    const textLength = text.length;
    // 140 - length
    const textRemainder = MAX_CHARACTERS - textLength;
    $(".counter").text(textRemainder);
    if (textLength === 0) {
      $(".empty-tweet").removeClass("hidden");
      $(".too-long").addClass("hidden");
    } else if (textRemainder < 0) {
      $(".too-long").removeClass("hidden");
      $(".empty-tweet").addClass("hidden");
    } else {
      $(".too-long").addClass("hidden");
      $(".empty-tweet").addClass("hidden");
    }

    $(".counter").toggleClass("counter-error", textRemainder < 0);
    $(".new-tweet input").prop("disabled", textRemainder < 0);
  });
});

