export default async function getFilmes(req, res) {

    const Filmes = await fetch(`http://localhost:5090/Filmes/get-all-filmes`,
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
