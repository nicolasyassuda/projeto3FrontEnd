export default async function postNomeFilme(req, res) {

    const Filmes = await fetch(`http://localhost:5090/CargaFilmes/requisicao`,
        {
            method: 'POST',
            body:JSON.stringify(req.body.nomeFilme),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    const retorno = await Filmes.json()
    res.status(200).json(retorno)
}
