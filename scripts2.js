function adicionarTextoNoHtml (tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
}

adicionarTextoNoHtml('.tituloInicial', 'Mercado de Trabalho');
adicionarTextoNoHtml('#paragrafoInicial', '"Mercado de trabalho associa aqueles que oferecem força de trabalho àqueles que a procuram, <br>em um sistema típico de mercado onde se negocia a fim de determinar os preços e as quantidades a transacionar."');
adicionarTextoNoHtml('#subtitulo', 'Definição:');