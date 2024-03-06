// ready...verifica se a pagina foi toda carregadada para não dar erro...

$(document).ready(function(){

    
    console.log('entrei no arquivo script.js');
    
    // este é jeito no JS
    // let titulo = document.querySelector('h1');
    
    // este é o jquery
    let titulo = $('h1');
    
    console.log(titulo);
    
    
    // js
    document.getElementsByClassName('banner');
    // jquery
    // $('.banner').hide();

    $('h1').css('color','orange');

    // ele pega a cor atual e guarda na variavel
    let corFooter =$('footer').css('background-color');

    console.log(corFooter);

    $('header').css('background-color',corFooter);

    $('ul.teste li').click(function(){
        $(this).hide();
    });

    // click apaga o elemento
$('h1').click(function(){
    // o this é o h1 que esta sendo referenciado
    $(this).hide();
});


// pinta o fundo do campo
$('form input, form textarea').blur(function(){
    if($(this).val() ==''){
        $(this).css('background-color','#ffb6b6');
    }else {
        $(this).css('background-color','#ccf3c2');
    }
});

$('form button').click(function(evento){
    evento.preventDefault(); //interrope o envio do formulario

    if($('input#name').val() !="" && 
       $('input#email').val() !="" &&
       $('textarea#message').val() !=""){

        $('form .alert').removeClass('alert-danger');
        $('form .alert').addClass('alert-success');
        $('form .alert').text('mensagem enviada com sucesso :>');

        setTimeout(function(){
            $('form').submit(); //enviar as informações do formulario
        },5000);
        

    }else{
        $('form .alert').removeClass('alert-success');
        $('form .alert').addClass('alert-danger');
        $('form .alert').text('Vc não preencheu corretamente');
    }
});


$('h2').click(function(){
    $(this).next('div').slideToggle('slow');
});

});


