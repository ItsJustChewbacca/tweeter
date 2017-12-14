const MAX_CHARACTERS = 140;

$(document).ready(function() {
  $(".new-tweet textarea").on("keyup", function() {
    // grab the value inside of the textarea
    const text = $(this).val();
    // length of string
    const textLength = text.length;
    // 140 - length
    const textRemainder = MAX_CHARACTERS - textLength;
    $(".counter").text(textRemainder);

    $(".counter").toggleClass("counter-error", textRemainder < 0);
    $(".new-tweet input").prop("disabled", textRemainder < 0);

    //
  });
});
