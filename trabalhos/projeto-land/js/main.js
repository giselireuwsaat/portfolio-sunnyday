console.log ("ddddd")

let botaoMenu = document.querySelector ('.menu-mobile');
let menuPrincipal = document.querySelector ('.menu-principal');

console.log (botaoMenu);
botaoMenu.onclick = function (){
    // console.log ('click!');
    menuPrincipal.classList.toggle ('visible');
}

// toggle dinamico = se esta visivel ele apaga, se esta apagado ele mostra