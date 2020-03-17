// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
let gify_api_url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC"
$("#search-button").click(function(){
    let Input = $("#search-term").val();
    fetch(gify_api_url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        let image = ""
        $(".gallery").append("<img scr="+ +">")
        //$(".text-center").html(`<img src ="${data.url}">`);
        //$(".image").append("<img src=" + data + Input">")


    });
});

