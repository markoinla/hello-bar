$(document).ready(function(){
$('body').delay(750).queue(function() {
        $('body').css("padding-top","55px").dequeue();
    });
$("#message").hide().delay(750).slideDown('slow');
$('#close-notify').click(function() {
    $("#message").fadeOut('fast').queue(function() {
        $('body').css("padding-top","0px").dequeue();
    });;
});
});
