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
          console.log(data.data[0].url)
        let url = data.data[0].images.fixed_width.url;
    $(".text-center").html(`<img src="${url}">`);
         data.data.forEach(function(image){
              $(".text-center").append(`<img src="${image.images.fixed_width.url}">`);
            // $(".image").append('<div class="image">\
            //         <a class="thumbnail" href ="' + image.images.fixed_width.url + '">\
            //             <img src="' + image.images.fixed_width.url + '"/>\
            //         </a>\
            //     </div>');
         });
    });
});
