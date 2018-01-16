const $paciente = $('#paciente');
const $profissional = $('#profissional');

$(document).ready(() => {
    $profissional.hide();
    $paciente.hide();
})

$('#paciente-button').click(function(){

    $profissional.hide();
    $paciente.show();
    mostrar = true;
});
$('#profissional-button').click(function(){

    $paciente.hide();
    $profissional.show();
    mostrar = false;
});
//VERIFICAR EMAIL
$('#EMAIL').on('mouseleave', () =>{
var email = document.getElementById('EMAIL').value;
$('#email-mensagem').append("<label></label>");
for(var i = 0; i <= email.length;i++){
    if(email.charAt(i) == "@"){
        $('#email-mensagem').append("<label>Válido</label>");
        break;
    }
    else if(i== email.length){
       $('#email-mensagem').css('color',"red");
       $('#email-mensagem').append("<label>Inválido</label>");
       break;
    }
}
});
$('#EMAIL').on('click',() => {
    $('label for="EMAIL"').remove();
})
