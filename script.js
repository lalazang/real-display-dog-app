'use strict';

function getDogImage(amount) {
  fetch(`https://dog.ceo/api/breeds/image/random/${amount}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson.message);
  $('.results').removeClass('hidden');
  let imageNum = responseJson.message.length;

  for (let i=0; i<imageNum; i++) {
    $('.results').append(
    `<img src="${responseJson.message[i]}" class="results-img">`
    )
  }

}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    //clear results section
    $('.results').html('');
    
    let amount = $('input').val();
    if (amount < 0) {
        alert('Please stay positive 1-50');
    }
    else if (amount > 50 || amount == 0) {
        alert('Please stay between 1-50');
    }
    else {
    console.log(amount);
    getDogImage(amount);
    }
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});