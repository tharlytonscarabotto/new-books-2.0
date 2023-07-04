let livros = []
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endPointAPI)
    livros = await res.json()
    let livrosDesconto = aplicarDesconto(livros)
    exibeLivrosNaTela(livrosDesconto)
}

