$(document).ready(function(){
  $(document).ajaxStart(function(){
    $('#ajaxSpinnerImage').show();
  }).ajaxStop(function(){
    $('#ajaxSpinnerImage').hide();
  }).ajaxError(function(event, request, settings){
    $('#msg').append("<p>Error requesting page " + settings.url + "</p>");
  });
});
