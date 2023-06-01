export default async function getFilmes(req, res) {
    const logar = await fetch(`http://localhost:5090/Filmes/get-filme-lista`,
        {
            method: 'POST',
            body:JSON.stringify(req.body.listaCodFilmes.slice(0,req.body.listaCodFilmes.length-1)),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    const retorno = await logar.json()
    res.status(200).json(retorno)
}
