function adicionarTextoNoHtml(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}

function adicionarTextoPorId(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

adicionarTextoNoHtml('.titulo', 'Olá, mundo! Bem vindo ao meu portifólio ;)');