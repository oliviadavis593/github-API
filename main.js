'use strict';

// Displays message when document has fully loaded
$(document).ready(function() {
    console.log('App loaded. Please submit something');
    watchSubmitButton();
});

//value that user puts in 
function userInput() {
  let search = $('#user-input').val();
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
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('I cannot find that. Try something else!'));
}

//Displays (renders) results to the DOM
function displayResults(responseJson) {
    console.log(responseJson);
    $(".profile-results").empty();
    let responseHtml = "";
    responseJson.forEach(userRepo => {
      responseHtml += `<div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">${userRepo.name}</h3>
      </div>
      <div class="panel-body">
       <div class= "row>
       <div class="col-md-3">
       <a href=" ${userRepo.html_url}">Link to Repo</a>
       </div>
      </div> 
    </div>`;
    });
    $(".profile-results").html(responseHtml);
    $("#results").removeClass("hidden");
  }
