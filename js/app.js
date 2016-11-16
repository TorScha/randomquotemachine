/**
 * Created by TorScha on 16.11.2016.
 */
$(document).ready(function () {

    getQuote();

    $("#new-quote").on("click", function () {
        getQuote();
    });

    $("#tweet-quote").on("click", function () {
        tweetQuote();
    })
});


function getQuote() {

    //var quote = [];

    //$.getJSON('https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en', writeQuote);

    $.ajax({
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', // The URL to the API. You can get this in the API page of the API you intend to consume
        type: 'POST', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(data) { writeQuote(data) },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "32LD6UoeAWmshQhGWiTRsKNpicnAp13JIlMjsn4ersGJmOv0Jb"); // Enter here your Mashape key
        }
    });



    // var header = {
    //     'X-Mashape-Key': '32LD6UoeAWmshQhGWiTRsKNpicnAp13JIlMjsn4ersGJmOv0Jb',
    // 'Content-Type': 'application/x-www-form-urlencoded',
    //     'Accept': 'application/json'
    // };
    //
    //
    // $.post('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies', header, writeQuote);
    //
    //
    // // disable cache, because a new api request is called. isn't needed when json returns array of objects
    // $.ajaxSetup({cache: false});
}

function writeQuote(json) {
    $("#quote").html('<span class="fa fa-quote-left" aria-hidden="true" style="margin-right: 5px;"></span>' + json.quote);
    $("#author").html(json.author);
}

function tweetQuote() {

    var quote = document.getElementById("quote").innerText;
    var author = document.getElementById("author").innerText;



    //$("#tweet-quote").href("https://twitter.com/intent/tweet?text=" + quote);
    var tweet = document.getElementById("tweet-quote");
    tweet.href = "https://twitter.com/intent/tweet?text=" + quote + " - " + author;
    tweet.target = "_blank";
}