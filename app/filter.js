const botoesFiltro = document.querySelectorAll('.btn')

botoesFiltro.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const btn = document.getElementById(this.id)
    const categoria = btn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibeLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel'){
        const valorTotal = calcularValorTotal(livrosFiltrados)
        exibirPromoTotal(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirPromoTotal(valorTotal){
    elementoPromocaoTotal.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}