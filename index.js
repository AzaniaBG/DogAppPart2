'use strict'
function getDogImages(number) {
    
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`).then(response => response.json()).then(responseJson => {
        let images = responseJson.message;
        images.map(image => {
            displayImages(image);
            //console.log(`image is ${image}`)
            //return image
        })
        // console.log(`images is ${images}`)
        // return images;
    });
    
}


function displayImages(images) {
    // $(".results-img").replaceWith(`<img src="${images}" class="results-img">`);
    // $(".results").removeClass("hidden");
    $(".results-img").empty();
    $("#results-img").hide();
    $("#search-results").append(`<li class="no-bullets"><img class="results-img" src="${images}" class="results-img"></li>`);
    $(".results").removeClass("hidden");
}

function watchForm() {
    $('form').submit(event =>{
        event.preventDefault();
        let inputValue = $("input").val();
        getDogImages(inputValue);  
    });
}

function handleDogPicApp() {
    console.log(`handleDogPicApp ran`);
    watchForm();
}

$(handleDogPicApp);