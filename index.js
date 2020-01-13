'use strict'
function getDogImages(number) {
    
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
      .then(response => response.json())
      .then(responseJson =>  displayImages(responseJson));
    
}


function displayImages(responseJson) {
    //$("#results").empty();
    let imageString = "";
    imageString += `<ul>` 
    responseJson.message.map(image => {
        imageString += `<li><img src="${image}"/></li>`
    })
    imageString += `</ul>`
    $(".results").html(imageString);
    $(".results").removeClass("hidden");
    
}

function watchForm() {
    $('form').submit(event =>{
        event.preventDefault();
        let inputValue = $("input").val();
        if(inputValue > 50) {
            $("#results").html(`<h1>Please select a number between 1 and 50</h1>`)
        } else {
            getDogImages(inputValue);
        };  
    });
}

function handleDogPicApp() {
    console.log(`handleDogPicApp ran`);
    watchForm();
}

$(handleDogPicApp);