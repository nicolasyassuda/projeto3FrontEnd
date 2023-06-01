export default async function getFilmes(req, res) {
    console.log(req.body.codFilme)
    const Filmes = await fetch(`http://localhost:5090/Filmes/get-filme?` + new URLSearchParams({codFilme: req.body.codFilme}),
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    const retorno = await Filmes.json()
    res.status(200).json(retorno)
}
