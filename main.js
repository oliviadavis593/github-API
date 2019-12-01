'use strict';

// Displays message when document has fully loaded
$(document).ready(function() {
    console.log('App loaded. Please submit something');
    watchSubmitButton();
});

//value that user puts in 
function userInput() {
  let search = $('#user-input');
  return search;  
}

//Watching for the submit button
function watchSubmitButton() {
    $('#search-form').submit(e => {
        e.preventDefault();
        fetchUserName();
    });
}

//Makes request to the Github API
function fetchUserName() {
    fetch('https://api.github.com/users/' + userInput() + '/repos')
        .then(response => response.json())
        .then(response => {
            console.log(responseJson)
            displayResults(responseJson)
        })
        .catch(error => alert('I cannot find that. Try something else!'));
}

//Displays (renders) results to the DOM
function displayResults(responseJson) {
    //for(let i = 0; i < responseJson.length; i += 1) {
       // console.log(responseJson);
    //}
    for (const repo of responseJson) {
        console.log(repo)
      }
}
