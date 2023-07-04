const botoesFiltro = document.querySelectorAll('.btn')

botoesFiltro.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const btn = document.getElementById(this.id)
    const categoria = btn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibeLivrosNaTela(livrosFiltrados)
}