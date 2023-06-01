export default async function avaliar(req, res) {
    console.log(req.body.codFilme)
    const registrar = await fetch(`http://localhost:5090/Filmes/avaliar-filme?` + new URLSearchParams({nota: req.body.nota, codFilme:req.body.codFilme}),
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    const retorno = await registrar.json()
    res.status(200).json(retorno)
}
