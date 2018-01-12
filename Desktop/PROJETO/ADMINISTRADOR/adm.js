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
