const btnOrdenar = document.getElementById('btnOrdenarPorPreco')

btnOrdenar.addEventListener('click', ordenarPorPreco)

function ordenarPorPreco(){
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibeLivrosNaTela(livrosOrdenados)
}