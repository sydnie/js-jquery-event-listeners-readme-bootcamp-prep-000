//define functions here
function getIt() {
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty');  
  });
}

function submitIt() {
  $('event').on('submit', function(){
    alert("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){

// call functions here

});
