$(document).ready(() => {

    $('#f1').hide();

    $("#f2").click( function(){
 
        $('#f1').slideDown();
    })
    $("#f1").click( function(){
 
        $('#f1').slideUp();
    })
})