//define functions here
function getIt() {
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function(){
    $('.tasty').css('border', "solid 2px red");  
  });
}

$(document).ready(function(){

// call functions here

});
