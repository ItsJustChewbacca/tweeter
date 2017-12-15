/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from tweets.json
$(document).ready(function() {
  $("#tweet-form").on("submit", function(event) {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/tweets/",
      data: $(this).serialize()
    }).success(function(tweets) {
      renderTweets(tweets);
    });
  });

  function loadTweets() {
    $.ajax({
      method: "GET",
      url: "/tweets/"
    }).success(function(tweets) {
      renderTweets(tweets);
    });
  }
  loadTweets();

  function renderTweets(tweets) {
    // loops through tweets
    $("#unknown").empty();
    for (var tweet of tweets) {
      $("#unknown").prepend(createTweetEl(tweet));
    }
    // calls createTweetElement for each tweet

    // takes return value and appends it to the tweets container
  }

  function createTweetEl(tweet) {
    let $tweet = `
          <article class="new-tweets">
            <header class="header">
              <img class="chief" src="${escape(tweet.user.avatars.small)}"/>
              <h3 class="name">${escape(tweet.user.name)}</h3>
              <h4 class="handle">${escape(tweet.user.handle)}</h4>
            </header>
            <div class="comment-section">
              <p class="comment">${escape(tweet.content.text)} </p>
            </div>
            <footer class="date">
              <p>${escape(tweet.created_at)}</p>
            </footer>
          </article>
    `;
    return $tweet;
  }

  function escape(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
});
