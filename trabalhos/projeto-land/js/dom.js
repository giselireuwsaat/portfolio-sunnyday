let divCurso = document.getElementById ('cursos');

let meuTitulo = document.createElement ('h1');

let textoTitulo = document.createTextNode ('Cursos');

meuTitulo.append(textoTitulo);
divCurso.append(meuTitulo);

//lista dinamica

let minhaLista = document.createElement('ul');
divCurso.append (minhaLista);
let listaCursos = ['fullstack','mkt', 'mobile', 'data'];

for (curso of listaCursos){
    let itemLi = document.createElement ('li');
    let itemTexto = document.createTextNode (curso);

    itemLi.append(itemTexto);
    divCurso.append(itemLi);

}